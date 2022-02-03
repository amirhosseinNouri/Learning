package main

import (
	"fmt"
	"strings"
)

func main() {
	var conferenceName = "Go conference"
	const conferenceTickets = 50
	var remainingTickets uint = conferenceTickets

	fmt.Printf("conferencTicket is %T, remainingTickets is %T and conferenceName is %T\n", conferenceTickets, remainingTickets, conferenceName)

	fmt.Printf("Welcome to %v our booking application.\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
	fmt.Println("Get you tickets here.")

	var bookings []string

	for {
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

		isNameValid := len(firstname) >= 2 && len(lastname) >= 2
		isEmailValid := strings.Contains(email, "@")
		isUserTicketsValid := userTickets > 0 && userTickets <= remainingTickets

		if isNameValid && isEmailValid && isUserTicketsValid {
			remainingTickets = remainingTickets - userTickets
			bookings = append(bookings, firstname+" "+lastname)

			fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation Email at %v\n", firstname, lastname, userTickets, email)
			fmt.Printf("%v tickets remaining for %v\n", remainingTickets, conferenceName)

			firstNames := []string{}

			for _, booking := range bookings {
				var names = strings.Fields(booking)
				firstNames = append(firstNames, names[0])
			}

			fmt.Printf("The first names of bookings are: %v\n", firstNames)

			fmt.Printf("These are all the bookings %v\n", bookings)

			isBookedOut := remainingTickets == 0

			if isBookedOut {
				fmt.Println("Our conference is booked out. Come back later")
				break
			}
		} else {
			fmt.Println("Your input data is invalid. Try again.")
			continue
		}

	}

}
