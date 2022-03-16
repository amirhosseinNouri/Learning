package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {

	if len(os.Args[1:]) == 0 {
		fmt.Fprint(os.Stderr, "Fetch: You should at least pass a URL.")
		os.Exit(1)
	}

	for _, url := range os.Args[1:] {
		response, err := http.Get(url)

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
