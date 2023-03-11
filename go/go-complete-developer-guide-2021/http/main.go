package main

import (
	"fmt"
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

	bs := make([]byte, 99999)

	n, err := res.Body.Read(bs)

	if err != nil {
		fmt.Println("Error:", err)
	}

	fmt.Println(string(bs), n)

}
