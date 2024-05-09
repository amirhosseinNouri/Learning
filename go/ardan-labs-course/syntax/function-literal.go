package main

import "fmt"

func main() {
	var n int

	func() {
		fmt.Println("Direct: ", n)
	}()

	f := func() { fmt.Println("Variable: ", n) }

	f()

	defer func() {
		fmt.Println("Defer 1: ", n)
	}()

	n = 3

	f()

	defer func() {
		fmt.Println("Defer 2: ", n)
	}()

}
