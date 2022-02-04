package main

import "fmt"

// Create a new type of 'deck'
// Which is a slice of strings

type deck []string

func (d deck) print() {
	for _, card := range d {
		fmt.Println(card)
	}
}
