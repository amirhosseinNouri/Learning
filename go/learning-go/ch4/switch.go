package main

import (
	"fmt"
)

func main() {
	words := []string{"a", "cow", "smile", "gopher", "octopus", "biomedical"}

	for _, word := range words {
		switch size := len(word); size {
		case 1, 2, 3, 4:
			fmt.Println(word, "is too short")
		case 5:
			fmt.Println(word, "is exactly the right length:", size)

		case 6, 7, 8, 9:
		default:
			fmt.Println(word, "is too long")
		}
	}
}
