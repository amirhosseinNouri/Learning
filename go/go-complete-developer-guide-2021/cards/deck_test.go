package main

import "testing"

func TestCreateNewDeck(t *testing.T) {
	d := createNewDeck()

	if len(d) != 16 {
		t.Errorf("Expected deck length of 16, but got %d", len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("Expecred the first card to be Ace of Spades, but got %v", d[0])
	}

	if d[len(d)-1] != "Four of Clubs" {
		t.Errorf("Expecred the last card to be Four of Clubs, but got %v", d[0])
	}

}
