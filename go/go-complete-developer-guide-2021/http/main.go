package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

var googleAddress = "http://google.com"

func main() {
	res, err := http.Get(googleAddress)

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	_, err = io.Copy(os.Stdout, res.Body)

	if err != nil {
		fmt.Println("Error:", err)
	}

}
