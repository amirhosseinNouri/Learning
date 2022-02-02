package main

import "fmt"

func main(){
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets = conferenceTickets

	fmt.Println("Welcome to" , conferenceName ,  "our booking application.")
	fmt.Println("We have total of" , conferenceTickets , "tickets and" , remainingTickets , "are still available.")
	fmt.Println("Get you tickets here.")


}
