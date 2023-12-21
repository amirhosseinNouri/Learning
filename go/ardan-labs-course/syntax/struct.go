package main

import "fmt"

type example struct {
	flag    bool
	counter int16
	pi      float32
}

func main() {
	var e1 example
	fmt.Printf("%+v\n", e1)

	// Literal constructions
	e2 := example{flag: true, counter: 10, pi: 3.14}

	fmt.Printf("%+v\n", e2)
	fmt.Println(e2.flag)
	fmt.Println(e2.counter)
	fmt.Println(e2.pi)
}
