package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

func main() {

	start := time.Now()
	ch := make(chan string)

	for _, url := range os.Args[1:] {
		go fetch(url, ch)
	}

	for range os.Args[1:] {
		fmt.Println(<-ch)
	}

	fmt.Printf("%.2fs elapsed\n", time.Since(start).Seconds())
}

func fetch(url string, ch chan string) {
	start := time.Now()

	res, err := http.Get(url)

	if err != nil {
		ch <- fmt.Sprint(err)
		return
	}

	n, err := io.Copy(io.Discard, res.Body)
	res.Body.Close()

	if err != nil {
		ch <- fmt.Sprintf("Error while reading %s: %v", url, err)
		return
	}

	secs := time.Since(start).Seconds()
	ch <- fmt.Sprintf("%.2fs\t%7d\t%s", secs, n, url)
}
