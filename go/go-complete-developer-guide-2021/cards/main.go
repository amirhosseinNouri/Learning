package main

import "fmt"

func main() {
	cards := []string{"Ace of Diamonds", createNewCard()}
	cards = append(cards, "Six of Spades")

	for i, card := range cards {
		fmt.Println(i, card)
	}

}

func createNewCard() string {
	return "Five of Diamonds"
}
