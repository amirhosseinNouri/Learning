package main

import (
	htmlParser "chapter-5-functions/html"
	"fmt"
	"golang.org/x/net/html"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	err := title(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
}

func title(url string) error {
	resp, err := http.Get(url)

	if err != nil {
		return err
	}

	ct := resp.Header.Get("Content-Type")

	if ct != "text/html" && !strings.HasPrefix(ct, "text/html") {
		_ = resp.Body.Close()
		return fmt.Errorf("the resonse of %s has type %s, not text/html", url, ct)

	}

	doc, err := html.Parse(resp.Body)
	_ = resp.Body.Close()

	if err != nil {
		return fmt.Errorf("failed to parse the documenent retreived from %s: %s", url, err)
	}

	visitNode := func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "title" && n.FirstChild != nil {
			fmt.Println(n.FirstChild.Data)
		}
	}

	htmlParser.ForEachNode(doc, visitNode, nil)

	return nil
}
