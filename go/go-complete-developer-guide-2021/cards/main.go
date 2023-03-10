package main

import "fmt"

func main() {
	d := createNewDeck()

	fmt.Println(d[:0])
}
