// Package links provides a link-extraction function.
package links

import (
	"fmt"
	"golang.org/x/net/html"
	"net/http"
)

func Extract(url string) ([]string, error) {
	resp, err := http.Get(url)

	if err != nil {
		return nil, err
	}

	if resp.StatusCode != http.StatusOK {
		_ = resp.Body.Close()
		return nil, fmt.Errorf("the endpoint %s responded with %d status code", url, resp.StatusCode)
	}

	doc, err := html.Parse(resp.Body)
	_ = resp.Body.Close()

	if err != nil {
		return nil, fmt.Errorf("failed to parse the HTML retreived from %s: %s", url, err)
	}

	var links []string

	visitNode := func(n *html.Node) {
		if isTag(n, "a") {
			href, ok := extractAttr(n, "href")

			if !ok {
				return
			}

			link, err := resp.Request.URL.Parse(href)

			if err != nil {
				// Ignoring bad URLs
				return
			}

			links = append(links, link.String())
		}

	}

	forEachNode(doc, visitNode, nil)

	return links, nil

}

func extractAttr(n *html.Node, attr string) (string, bool) {
	for _, a := range n.Attr {
		if a.Key == attr {
			return a.Val, true
		}
	}

	return "", false
}

func isTag(n *html.Node, tag string) bool {
	if n.Type == html.ElementNode && n.Data == tag {
		return true
	}

	return false
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
