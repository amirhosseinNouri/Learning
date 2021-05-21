package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

type deck []string

func newDeck() deck {
	cards := deck{}

	cardSuits := []string{"Spades" , "Diamonds" , "Hearts" , "Club"}
	cardValues := []string{"Ace" , "Two" , "Three" , "Four"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, suit + " of " + value)
		}
	}

	return cards
}

func (d deck) print(){
	for i, card := range d {
		fmt.Println(i , card)
	}
}

func deal(d deck , handSize int) (deck , deck){
	return d[:handSize] , d[handSize:]
}

func (d deck) toString() string {
	return strings.Join([]string(d) , ",")
}

func (d deck) saveToFile(filename string) error{
	return ioutil.WriteFile(filename , []byte (d.toString()) , 0666 )
	
}