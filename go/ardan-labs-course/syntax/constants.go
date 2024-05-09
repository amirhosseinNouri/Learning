package main

import "fmt"

type color int

const (
	Red  = 10
	Blue = 20
)

func printColor(color int) {
	fmt.Println(color)
}

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

	printColor(10)
}
