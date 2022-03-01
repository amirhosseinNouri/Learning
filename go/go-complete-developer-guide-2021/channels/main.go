package main

import (
	"fmt"
	"net/http"
	"time"
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

	for host := range c {
		go func(h string) {
			time.Sleep(time.Second * 5)
			ping(h, c)
		}(host)
	}
}

func ping(host string, c chan string) {
	_, err := http.Get(host)

	if err != nil {
		message := fmt.Sprintf("%v might be down\n", host)
		fmt.Print(message)
		c <- host
		return
	}

	message := fmt.Sprintf("%v is up\n", host)
	fmt.Print(message)
	c <- host

}
