package main

import "fmt"

func main() {

	f := square()
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())
}

func square() func() int {

	var x int

	return func() int {
		x++
		return x * x
	}
}
