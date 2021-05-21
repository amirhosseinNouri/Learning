package main


func main(){
	cards := newDeck()
	hand , remainingParts := deal(cards , 5)
	hand.print()
	remainingParts.print()
}
