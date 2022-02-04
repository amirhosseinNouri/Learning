package main

func main() {
	// cards := newDeck()
	// hand, remainingDeck := deal(cards, 5)
	// hand.print()
	// fmt.Println("--")
	// remainingDeck.print()

	cards := newDeck()
	cards.saveToFile("cards.txt")

}
