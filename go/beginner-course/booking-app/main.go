package main

import "fmt"

func main(){
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets uint = conferenceTickets

	fmt.Printf("conferencTicket is %T, remainingTickets is %T and conferenceName is %T\n", conferenceTickets , remainingTickets , conferenceName)

	fmt.Printf("Welcome to %v our booking application.\n" , conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n" , conferenceTickets ,remainingTickets)
	fmt.Println("Get you tickets here.")

	// var bookings = [50]string{}
	var bookings [50]string

	var firstname string
	var lastname string
	var email string
	var userTickets uint

	fmt.Print("Enter your first name: ")
	fmt.Scan(&firstname)

	fmt.Print("Enter your last name: ")
	fmt.Scan(&lastname)


	fmt.Print("Enter your Email address: ")
	fmt.Scan(&email)

	fmt.Print("Enter the number of tickets: ")
	fmt.Scan(&userTickets)

	remainingTickets = remainingTickets - userTickets

	bookings[0] = firstname + " " + lastname

	fmt.Printf("The whole array: %v\n", bookings)
	fmt.Printf("The first value: %v\n", bookings[0])
	fmt.Printf("Array type: %T\n", bookings)
	fmt.Printf("Array length: %v\n", len(bookings))

	fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation Email at %v\n" ,firstname , lastname , userTickets , email)
	fmt.Printf("%v tickets remaining for %v\n", remainingTickets , conferenceName)

	
	fmt.Printf("User %v booked %v tickets.\n" , firstname, userTickets)
}	
