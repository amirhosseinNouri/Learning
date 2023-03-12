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
	}

	c := make(chan string)

	for _, url := range urls {
		go ping(url, c)
	}

	for l := range c {
		go ping(l, c)
	}
}

func ping(url string, c chan string) {
	_, err := http.Get(url)

	if err != nil {
		fmt.Printf("❌️ %v might be down!\n", url)
		c <- url
		return
	}
	fmt.Printf("✅ %v is up!\n", url)
	c <- url
}
