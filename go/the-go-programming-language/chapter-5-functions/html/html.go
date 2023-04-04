package html

import "golang.org/x/net/html"

func ForEachNode(n *html.Node, pre, post func(n *html.Node)) {

	if pre != nil {
		pre(n)
	}

	for c := n.FirstChild; c != nil; c = c.NextSibling {
		ForEachNode(c, pre, post)
	}

	if post != nil {
		post(n)
	}
}
