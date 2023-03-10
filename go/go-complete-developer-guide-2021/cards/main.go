package main

import "fmt"

func main() {
	cards := createNewDeck()

	hand, _ := deal(cards, 5)

	fmt.Println(hand.toString())

}
