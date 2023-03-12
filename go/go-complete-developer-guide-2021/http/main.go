package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

var googleAddress = "http://google.com"

type logWriter struct{}

func main() {
	res, err := http.Get(googleAddress)

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	lw := logWriter{}
	_, err = io.Copy(lw, res.Body)

	if err != nil {
		fmt.Println("Error:", err)
	}

}

func (logWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	fmt.Printf("Just wrote %d bytes", len(bs))
	return len(bs), nil
}
