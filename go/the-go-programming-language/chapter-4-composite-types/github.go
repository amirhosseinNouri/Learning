package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"net/url"
	"os"
	"strings"
	"time"
)

const IssuesURL = "https://api.github.com/search/issues"

type IssuesSearchResult struct {
	TotalCount int `json:"total_count"`
	Items      []*Issue
}

type Issue struct {
	Number    int
	HTMLURL   string `json:"html_url"`
	Title     string
	State     string
	User      *User
	CreatedAt time.Time `json:"created_at"`
	Body      string
}

type User struct {
	Login   string
	HTMLURL string `json:"html_url"`
}

func main() {
	result, err := SearchIssues(os.Args[1:])
	if err != nil {
		log.Fatal(err)
	}

	//printResult(result)
	//generateTemplate(result)
	generateHTML(result)
}

func printResult(result *IssuesSearchResult) {
	fmt.Printf("%d issues:\n", result.TotalCount)

	for _, item := range result.Items {
		fmt.Printf("#%-5d\t%9.9s\t%.55s\n",
			item.Number, item.User.Login, item.Title)
	}
}

func generateTemplate(result *IssuesSearchResult) {
	const templ = `{{.TotalCount}} issues
	{{range .Items}}---------------
	Number: {{.Number}}
	User: {{.User.Login}}
	Title: {{.Title | printf "%.64s" }}
	Age: {{.CreatedAt | daysAgo}} days
	{{end}}
	`

	var report = template.Must(template.New("issueList").Funcs(template.FuncMap{"daysAgo": daysAgo}).Parse(templ))

	if err := report.Execute(os.Stdout, result); err != nil {
		log.Fatal(err)
	}
}

func generateHTML(result *IssuesSearchResult) {
	var issueList = template.Must(template.New("issueList").Parse(`
	<h1>{{.TotalCount}}</h1>
	<table>
		<tr style='text-align: left'>
			<th>#</th>
			<th>State</th>
			<th>User</th>
			<th>Title</th>
		</tr>

		{{range .Items}}
			<tr>
				<td>
					<a href='{{.HTMLURL}}'>{{.Number}}</a>
				</td>
				<td>{{.State}}</td>
				<td>
					<a href='{{.User.HTMLURL}}'>{{.User.Login}}</a>
				</td>
				<td>
					<a href='{{.HTMLURL}}'>{{.Title}}</a>
				</td>
			</tr>
		{{end}}
	</table>
`))

	if err := issueList.Execute(os.Stdout, result); err != nil {
		log.Fatal(err)
	}
}

func daysAgo(t time.Time) int {
	return int(time.Since(t).Hours() / 24)
}

func SearchIssues(terms []string) (*IssuesSearchResult, error) {
	q := url.QueryEscape(strings.Join(terms, " "))

	resp, err := http.Get(IssuesURL + "?q=" + q)

	if err != nil {
		return nil, err
	}

	if resp.StatusCode != http.StatusOK {
		_ = resp.Body.Close()
		return nil, fmt.Errorf("search query failed: %s", err)
	}

	var result IssuesSearchResult

	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		_ = resp.Body.Close()
		return nil, err
	}

	_ = resp.Body.Close()
	return &result, nil
}
