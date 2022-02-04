package main

import "fmt"

func main() {
	cards := []string{newCard(), newCard(), "last"}
	cards = append(cards, "A new one")

	for _, card := range cards {
		fmt.Println(card)
	}
}

func newCard() string {
	return "Five of Diamonds"
}
