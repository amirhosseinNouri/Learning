package main

func main() {
	cards := readDeckFromFile("cards.txt")
	cards.shuffle()
	cards.print()
}
