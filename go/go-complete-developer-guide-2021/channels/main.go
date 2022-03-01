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

	c := make(chan string)

	for _, host := range hosts {
		go ping(host, c)
	}

	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(<-c)
}

func ping(host string, c chan string) {
	_, err := http.Get(host)

	if err != nil {
		message := fmt.Sprintf("%v might be down\n", host)
		fmt.Print(message)
		c <- message
		return
	}

	message := fmt.Sprintf("%v is up\n", host)
	// fmt.Print(message)
	c <- message

}
