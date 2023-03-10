package main

import (
	"os"
	"testing"
)

func TestCreateNewDeck(t *testing.T) {
	d := createNewDeck()

	if len(d) != DeckLength {
		t.Errorf("Expected deck length of %d, but got %d", DeckLength, len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("Expecred the first card to be Ace of Spades, but got %v", d[0])
	}

	if d[len(d)-1] != "Four of Clubs" {
		t.Errorf("Expecred the last card to be Four of Clubs, but got %v", d[0])
	}

}

func TestSaveToFileAndReadDockFromFile(t *testing.T) {
	deckTestingFileName := "_deckTesting"
	os.Remove(deckTestingFileName)

	deck := createNewDeck()
	deck.saveToFile(deckTestingFileName)

	loadedDeck := readDeckFromFile(deckTestingFileName)

	if len(loadedDeck) != DeckLength {
		t.Errorf("Expected %d cards in the deck, got %d", DeckLength, len(loadedDeck))
	}

	os.Remove(deckTestingFileName)
}

func TestToString(t *testing.T) {
	d := createNewDeck()

	if d.toString() == "" {
		t.Error("Got empty string when tried to apply toString on a deck")
	}
}

func TestDeal(t *testing.T) {
	d := createNewDeck()
	dealLength := 5

	deal, otherHalf := deal(d, dealLength)

	if len(deal) != dealLength {
		t.Errorf("Expected the lenght of the deal to be %d, but got %d", dealLength, len(deal))
	}

	otherHalfExpectedLength := DeckLength - dealLength

	if len(otherHalf) != DeckLength-dealLength {
		t.Errorf("Expected the lenght of the other half to be %d, but got %d", otherHalfExpectedLength, len(otherHalf))
	}

	if len(d) != DeckLength {
		t.Error("Expected the deal function not to modify the deck slice.")
	}

}
