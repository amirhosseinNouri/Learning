package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

func main() {
	for _, url := range os.Args[1:] {

		if needsProtocolPrefix(url) {
			url = "http://" + url
		}

		resp, err := http.Get(url)

		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\n", err)
			os.Exit(1)
		}

		fmt.Printf("Fetching %s resulted in %s status code\n", url, resp.Status)
		_, err = io.Copy(os.Stdout, resp.Body)
		fmt.Println()

		if err != nil {
			fmt.Fprintf(os.Stderr, "%v\n", err)
			os.Exit(1)
		}

	}
}

func needsProtocolPrefix(url string) bool {
	if strings.HasPrefix(url, "http://") {
		return false
	}

	return true
}
