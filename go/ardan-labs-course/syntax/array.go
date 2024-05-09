package main

import "fmt"

func main() {

	var fruits [5]string
	fruits[0] = "Apple"
	fruits[1] = "Apple"
	fruits[2] = "Apple"
	fruits[3] = "Apple"
	fruits[4] = "Apple"

	for i, f := range fruits {
		fmt.Printf("[%v]: %v\n", i, f)
	}

}
