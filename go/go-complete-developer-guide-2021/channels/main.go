package main

import (
	"fmt"
	"net/http"
)

func main() {
	urls := []string{
		"http://goolge.com",
		"http://stackoverflow.com",
		"http://github.com",
		"http://golang.org",
		"http://time.ir",
	}

	for _, url := range urls {
		ping(url)
	}
}

func ping(url string) {
	_, err := http.Get(url)

	if err != nil {
		fmt.Printf("❌️ %v might be down!\n", url)
		return
	}
	fmt.Printf("✅ %v is up!\n", url)
}
