package main

import (
	"fmt"
	"net/http"
)

func main() {
	hosts := []string{
		"http://google.com",
		"http://github.com",
		"http://stackoverflow.com",
		"http://shab.ir",
		"http://downloadly.ir",
	}

	for _, host := range hosts {
		ping(host)
	}
}

func ping(host string) {
	_, err := http.Get(host)

	if err != nil {
		fmt.Printf("%v might be down\n", host)
		return
	}

	fmt.Printf("%v is up\n", host)

}
