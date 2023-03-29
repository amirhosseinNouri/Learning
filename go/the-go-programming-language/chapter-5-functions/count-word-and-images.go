package main

import (
	"fmt"
	"golang.org/x/net/html"
	"log"
	"net/http"
	"os"
)

func main() {
	words, images, err := CountWordAndImages(os.Args[1])

	if err != nil {
		log.Fatalf("failed to cound word and images: %s", err)
	}

	fmt.Printf("words=%d\n", words)
	fmt.Printf("images=%d\n", images)
}

func CountWordAndImages(u string) (words, images int, err error) {
	resp, err := http.Get(u)

	if err != nil {
		return
	}

	doc, err := html.Parse(resp.Body)
	_ = resp.Body.Close()

	if err != nil {
		err = fmt.Errorf("failed to parse the HTML: %s", err)
		return
	}

	words, images = visitWordAndImages(doc)
	return

}

func visitWordAndImages(n *html.Node) (words, images int) {

	if n.Type == html.ElementNode && n.Data == "img" {
		images++
	}

	if n.Type == html.TextNode {
		words += len(n.Data)
	}

	for c := n.FirstChild; c != nil; c = c.NextSibling {
		w, i := visitWordAndImages(c)
		words += w
		images += i
	}

	return words, images

}
