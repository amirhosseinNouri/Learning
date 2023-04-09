package main

import (
	html2 "chapter-5-functions/html"
	"fmt"
	"golang.org/x/net/html"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {

	doc, err := fetchDocument2(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}

	title, err := soleTitle(doc)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf(title)
}

func fetchDocument2(url string) (*html.Node, error) {
	resp, err := http.Get(url)

	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	ct := resp.Header.Get("Content-Type")

	if ct != "text/html" && !strings.HasPrefix(ct, "text/html") {
		return nil, fmt.Errorf("the resonse of %s has type %s, not text/html", url, ct)

	}

	doc, err := html.Parse(resp.Body)

	if err != nil {
		return nil, fmt.Errorf("failed to parse the documenent retreived from %s: %s", url, err)
	}

	return doc, nil
}

func soleTitle(doc *html.Node) (title string, err error) {
	type bailout struct{}

	defer func() {
		switch p := recover(); p {
		case nil: // no panic
		case bailout{}:
			err = fmt.Errorf("multiple title found")
		default:
			panic(p)
		}
	}()

	html2.ForEachNode(doc, func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "title" && n.FirstChild != nil {
			if title != "" {
				panic(bailout{})
			}
			title = n.FirstChild.Data
		}
	}, nil)

	if title == "" {
		return "", fmt.Errorf("no title found")
	}

	return title, err
}
