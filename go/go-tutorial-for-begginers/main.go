package main

import "fmt"

const (
	conferenceTickets = 50
	conferenceName    = "Go conference"
)

func main() {
	var remainingTickets uint = conferenceTickets

	fmt.Printf("Welcome to %v booking application.\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)

	var bookings []string

	var firstName string
	var lastName string
	var email string
	var userTickets uint

	fmt.Printf("Enter your fist name: ")
	fmt.Scan(&firstName)

	fmt.Printf("Enter your last name: ")
	fmt.Scan(&lastName)

	fmt.Printf("Enter your email: ")
	fmt.Scan(&email)

	fmt.Printf("Enter the number of tickets you want: ")
	fmt.Scan(&userTickets)

	remainingTickets -= userTickets
	bookings = append(bookings, firstName+" "+lastName)

	fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation email at %v\n", firstName, lastName, userTickets, email)

	fmt.Printf("%v remained tickets.'n", remainingTickets)
}
