package main


func main(){
	cards := deck{newCard(), newCard(), "Ace of Diamonds"} 
	cards = append(cards, "Six of spades")
	cards.print()
}

func newCard() string{
	return "Five of Diamonds"
}