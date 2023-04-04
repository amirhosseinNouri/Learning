package main

import (
	htmlParser "chapter-5-functions/html"
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

	htmlParser.ForEachNode(doc, startElement, endElement)

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
