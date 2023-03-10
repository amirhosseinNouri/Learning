package main

func main() {
	cards := createNewDeck()

	cards.saveToFile("cards.txt")

}
