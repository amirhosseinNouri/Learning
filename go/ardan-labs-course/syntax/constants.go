package main

import "fmt"

// untyped
const ui = 12345 // kind: integer
const uf = 3.14  // kind: float-point

// Typed
const ti int = 12345
const tf float64 = 3.14

const unsignedInt8 = 1000

func main() {
	fmt.Printf("%v\t%T\n", unsignedInt8, unsignedInt8)

	const (
		A1 = iota
		B1
		C1
	)

	fmt.Println(A1, B1, C1)

}
