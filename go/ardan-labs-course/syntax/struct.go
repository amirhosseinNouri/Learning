package main

import "fmt"

type Person struct {
	id   int
	name string
	age  int
}

func main() {

	var p Person

	fmt.Printf("%v\n", p)
	fmt.Printf("%+v\n", p)
	fmt.Printf("%#v\n", p)

	// Literal constructions
	p2 := Person{
		name: "Amirhossein",
		age:  24,
		id:   1,
	}

	fmt.Printf("%+v\n", p2)
}
