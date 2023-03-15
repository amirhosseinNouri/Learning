package main

import "fmt"

func main() {
	const days int = 7

	fmt.Println(days)

	const (
		min = -500
		min2
		min3
	)

	fmt.Println(min, min3, min2)

	const (
		c1 = iota
		c2 = iota
		c3 = iota
	)

	fmt.Println(c1, c2, c3)

	const (
		c4 = iota
		c5
		c6
	)

	fmt.Println(c4, c5, c6)

	const (
		North = iota
		East
		South
		West
	)

	fmt.Println(North, East, South, West)

	const (
		a = iota * 2
		b
		c
	)

	fmt.Println(a, b, c)

	// x = -2 y = -4 z = -5

	const (
		x = -(iota + 2)
		_
		y
		z
	)

	fmt.Println(x, y, x)
}

