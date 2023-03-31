package main

import (
	"fmt"
	"golang.org/x/net/html"
	"log"
	"os"
)

var depth int

func main() {
	doc, err := html.Parse(os.Stdin)

	if err != nil {
		log.Fatalf("failed to parse the HTML: %s", err)
	}

	//outline(nil, doc)

	forEachNode(doc, startElement, endElement)

}

func startElement(n *html.Node) {
	if n.Type == html.ElementNode {
		fmt.Printf("%*s<%s>\n", depth*2, "", n.Data)
		depth++
	}
}

func endElement(n *html.Node) {
	if n.Type == html.ElementNode {
		depth--
		fmt.Printf("%*s<%s>\n", depth*2, "", n.Data)
	}
}

func forEachNode(n *html.Node, pre, post func(n *html.Node)) {

	if pre != nil {
		pre(n)
	}

	for c := n.FirstChild; c != nil; c = c.NextSibling {
		forEachNode(c, pre, post)
	}

	if post != nil {
		post(n)
	}
}
