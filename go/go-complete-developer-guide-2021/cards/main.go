package main

import "fmt"

func main() {
	// cards := newDeck()
	// hand, remainingDeck := deal(cards, 5)
	// hand.print()
	// fmt.Println("--")
	// remainingDeck.print()

	cards := newDeck()
	fmt.Println(cards.toString())

}
