package main

import (
	"chapter-6-methods/geometry"
	"fmt"
)

func main() {
	perim := geometry.Path{
		{1, 1},
		{5, 1},
		{5, 4},
		{1, 1},
	}

	fmt.Println(perim.Distance())

	p := geometry.Point{X: 1, Y: 2}

	fmt.Println(p)
	p.ScaleBy(2)
	fmt.Println(p)

}
