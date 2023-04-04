package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path"
)

func main() {
	fileName, n, err := fetch(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("the document saved with %s name. It has %d length\n", fileName, n)
}

func fetch(url string) (filename string, n int64, err error) {
	resp, err := http.Get(url)

	if err != nil {
		return "", 0, err
	}

	defer resp.Body.Close()

	local := path.Base(resp.Request.URL.Path)

	if local == "/" {
		local = "index"
	}

	local += ".html"

	f, err := os.Create(local)

	if err != nil {
		return "", 0, err
	}

	n, err = io.Copy(f, resp.Body)

	if closeErr := f.Close(); closeErr != nil {
		err = closeErr
	}

	return local, n, err
}
