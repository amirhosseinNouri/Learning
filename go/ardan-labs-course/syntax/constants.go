package main

import "fmt"

func main() {
	const ui = 12345 // kind: integer
	const uf = 3.13  // kind: floating point

	const ti int = 1234 // type: int

	const (
		A1 = iota + 1
		B1
		C3
	)

	fmt.Println(A1, B1, C3)
}
