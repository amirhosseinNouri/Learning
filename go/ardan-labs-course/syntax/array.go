package main

import "fmt"

func main() {
	var fruits [5]string
	fruits[0] = "Apple"
	fruits[1] = "Orange"
	fruits[2] = "Banana"
	fruits[3] = "Grape"
	fruits[4] = "Plum"

	for i, fruit := range fruits {
		fmt.Printf("%v\t%v\n", i, fruit)
	}

	//numbers := [5]int{1, 2, 3, 4, 5}
	// Literal constructions
	numbers := [...]int{1, 2, 3, 4, 5}

	for i, n := range numbers {
		fmt.Printf("%v\t%v\n", i, n)

	}

}
