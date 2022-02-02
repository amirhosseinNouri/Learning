package main

import "fmt"

func main(){
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets = conferenceTickets

	fmt.Printf("Welcome to %v our booking application.\n" , conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n" , conferenceTickets ,remainingTickets)
	fmt.Println("Get you tickets here.")


}
