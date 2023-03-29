package main

import (
	"fmt"
	"golang.org/x/net/html"
	"net/http"
	"os"
)

func main() {
	for _, l := range os.Args[1:] {
		links, err := findLinks(l)

		if err != nil {
			_, _ = fmt.Fprintf(os.Stderr, "failed to find links on %s", l)
			continue
		}

		for _, l := range links {
			fmt.Println(l)
		}
	}
}

func findLinks(l string) ([]string, error) {
	resp, err := http.Get(l)

	if err != nil {
		return nil, err
	}

	if resp.StatusCode != http.StatusOK {
		_ = resp.Body.Close()
		return nil, fmt.Errorf("the endpoint responsed with %d status code", resp.StatusCode)
	}

	doc, err := html.Parse(resp.Body)
	_ = resp.Body.Close()

	if err != nil {
		return nil, fmt.Errorf("faild to parse the document recevied from %s: %s", l, err)
	}

	return visit(nil, doc), nil
}
