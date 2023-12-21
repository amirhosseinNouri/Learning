package main

import "fmt"

type config1 struct {
	url string
}

type config2 struct {
	url string
}

func main() {

	// Literal type
	e := struct {
		flag    bool
		counter int16
		pi      float32
	}{flag: true, counter: 10, pi: 3.14}

	fmt.Printf("%+v\n", e)

	//c1 := config1{url: ""}

}
