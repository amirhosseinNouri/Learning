package main

import "fmt"

func main() {
	card := createNewCard()
	fmt.Println(card)
}

func createNewCard() string {
	return "Five of Diamonds"
}
