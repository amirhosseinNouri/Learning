package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

func main() {

	if len(os.Args[1:]) == 0 {
		fmt.Fprint(os.Stderr, "Fetch: You should at least pass a URL.")
		os.Exit(1)
	}

	for _, url := range os.Args[1:] {

		if strings.HasPrefix(url, "http") == false {
			url = appendProtocol(url)
		}

		fmt.Printf("Going to fetch %v\n", url)
		response, err := http.Get(url)

		fmt.Printf("STATUS: %v\n", response.Status)

		if err != nil {
			fmt.Fprintf(os.Stderr, "Fetch: %v\n", err)
			os.Exit(1)
		}

		body, err := ioutil.ReadAll(response.Body)
		response.Body.Close()

		if err != nil {
			fmt.Fprintf(os.Stderr, "Fetch: reading %s: %v\n", url, err)
			os.Exit(1)
		}
		fmt.Printf("%s\n", body)
	}
}

func appendProtocol(url string) string {
	return "http://" + url
}
