package main

func main() {
	cards := createNewDeck()

	hand, remainingDeck := deal(cards, 5)

	hand.print()
	remainingDeck.print()

}
