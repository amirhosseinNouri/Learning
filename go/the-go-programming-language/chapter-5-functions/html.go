package main

import (
	"fmt"
	"golang.org/x/net/html"
	"log"
	"os"
)

func main() {
	doc, err := html.Parse(os.Stdin)
	if err != nil {
		log.Fatalf("failed to find links: %s", err)
	}

	for _, link := range visit(nil, doc) {
		fmt.Println(link)
	}
}

func visit(links []string, n *html.Node) []string {
	if isAnchor(n) {
		links = visitAnchor(links, n)
	}

	links = traversChildren(links, n.FirstChild)

	return links
}

func visitAnchor(links []string, n *html.Node) []string {
	if l := extractAnchorHref(n); l != "" {
		links = append(links, l)
	}

	return links
}

func isAnchor(n *html.Node) bool {
	if n.Type == html.ElementNode && n.Data == "a" {
		return true
	}

	return false
}

func extractAnchorHref(n *html.Node) string {
	for _, a := range n.Attr {
		if a.Key == "href" && shouldCollectLink(a.Val) {
			return a.Val
		}
	}
	return ""
}

func traversChildren(links []string, n *html.Node) []string {
	if n == nil {
		return links
	}

	links = visit(links, n)

	return traversChildren(links, n.NextSibling)

}

func shouldCollectLink(l string) bool {
	if l == "#" {
		return false
	}

	return true
}
