package main

import (
	"golang.org/x/net/html"
)

var mapElementToAttr = map[string]string{
	"img":    "src",
	"link":   "href",
	"script": "src",
	"a":      "href",
}

func visit(links []string, n *html.Node) []string {
	if isTag(n, "a") {
		links = visitAnchor(links, n)
	}

	if isTag(n, "img") {
		links = visitElement(links, n, "img")
	}

	if isTag(n, "link") {
		links = visitElement(links, n, "link")
	}

	if isTag(n, "script") {
		links = visitElement(links, n, "script")
	}

	links = traversChildren(links, n.FirstChild)

	return links
}

func visitElement(links []string, n *html.Node, element string) []string {

	attr := mapElementToAttr[element]

	if s := extractAttr(n, attr); s != "" {
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
