package main

import (
	"fmt"
	"golang.org/x/net/html"
	"log"
	"os"
	"strings"
)

func main() {
	doc, err := html.Parse(os.Stdin)

	if err != nil {
		log.Fatalf("failed to parse the HTML: %s", err)
	}

	printTextNodeContent(doc)

}

func printTextNodeContent(n *html.Node) {

	if n.Data == "script" || n.Data == "style" {
		return
	}

	if n.Type == html.TextNode {

		trimmed := strings.TrimSpace(n.Data)
		spaceRemoved := strings.ReplaceAll(trimmed, " ", "")

		if len(spaceRemoved) == 0 {
			return
		}

		fmt.Println(spaceRemoved)
	}

	for c := n.FirstChild; c != nil; c = c.NextSibling {
		printTextNodeContent(c)
	}
}
