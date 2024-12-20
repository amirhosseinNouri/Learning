package main

import (
	"fmt"
	"os"
	"strings"
)

type deck []string

var DeckLength = 16

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func createNewDeck() deck {
	cards := deck{}

	cardSuits := []string{"Spades", "Hearts", "Diamonds", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards
}

func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	byteSlice := []byte(d.toString())
	return os.WriteFile(filename, byteSlice, 0666)
}

func readDeckFromFile(filename string) deck {
	bs, err := os.ReadFile(filename)

	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	s := strings.Split(string(bs), ",")
	return deck(s)

}

func (d deck) shuffle() {
	for i := range d {
		newIndex := generateRandomInt(len(d) - 1)
		d[i], d[newIndex] = d[newIndex], d[i]
	}
}
