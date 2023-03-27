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
		log.Fatalf("failed to parse the HTML: %s", err)
	}

	elements := make(map[string]int)

	traversNode(elements, doc)

	for k, v := range elements {
		fmt.Printf("%s\t%d\n", k, v)
	}

}

func traversNode(m map[string]int, n *html.Node) {
	if n.Type == html.ElementNode {
		m[n.Data]++
	}

	for c := n.FirstChild; c != nil; c = c.NextSibling {
		traversNode(m, c)
	}
}
