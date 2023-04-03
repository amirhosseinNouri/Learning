package main

import (
	"fmt"
	"golang.org/x/net/html"
	"log"
	"net/http"
	"os"
)

func main() {
	doc, err := fetchDocument(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}

	images := getElementsByTagName(doc, "img")
	fmt.Printf("found %d images\n", len(images))

	headings := getElementsByTagName(doc, "h1", "h2", "h3", "h4", "h5", "h6")
	fmt.Printf("found %d headings\n", len(headings))
}

func fetchDocument(url string) (*html.Node, error) {
	resp, err := http.Get(os.Args[1])

	if err != nil {
		return nil, err
	}

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("endpoint %s responded with %d status code", url, resp.StatusCode)
	}

	doc, err := html.Parse(resp.Body)

	if err != nil {
		return nil, fmt.Errorf("failed to parse the HTML: %s", err)
	}

	return doc, nil
}

func getElementsByTagName(n *html.Node, names ...string) []*html.Node {

	var elements []*html.Node

	if n.Type == html.ElementNode {
		for _, name := range names {
			if name == n.Data {
				elements = append(elements, n)
			}
		}
	}

	for c := n.FirstChild; c != nil; c = c.NextSibling {
		elements = append(elements, getElementsByTagName(c, names...)...)
	}

	return elements

}
