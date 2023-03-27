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
	if isTag(n, "a") {
		links = visitAnchor(links, n)
	}

	if isTag(n, "img") {
		links = visitImage(links, n)
	}

	if isTag(n, "link") {
		links = visitStyleTag(links, n)
	}

	if isTag(n, "script") {
		links = visitScriptTag(links, n)
	}

	links = traversChildren(links, n.FirstChild)

	return links
}

func visitImage(links []string, n *html.Node) []string {
	if s := extractAttr(n, "src"); s != "" {
		links = append(links, s)
	}

	return links
}

func visitStyleTag(links []string, n *html.Node) []string {
	if s := extractAttr(n, "href"); s != "" {
		links = append(links, s)
	}

	return links
}

func visitScriptTag(links []string, n *html.Node) []string {
	if s := extractAttr(n, "src"); s != "" {
		links = append(links, s)
	}

	return links
}

func extractAttr(n *html.Node, attr string) string {
	for _, a := range n.Attr {
		if a.Key == attr {
			return a.Val
		}
	}

	return ""
}

func visitAnchor(links []string, n *html.Node) []string {
	if l := extractAttr(n, "href"); l != "" && shouldCollectLink(l) {
		links = append(links, l)
	}

	return links
}

func isTag(n *html.Node, tag string) bool {
	if n.Type == html.ElementNode && n.Data == tag {
		return true
	}

	return false
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
