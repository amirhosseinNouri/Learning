package main

import (
	"fmt"
	"strings"
)

const conferenceTickets = 50

var conferenceName = "Go conference"
var remainingTickets uint = conferenceTickets
var bookings []string

func main() {

	greetUsers()

	for {

		firstname, lastname, email, userTickets := getUserInputs()

		isNameValid, isEmailValid, isUserTicketsValid := validateUserInput(firstname, lastname, email, userTickets)

		if isNameValid && isEmailValid && isUserTicketsValid {

			bookings := bookTicket(userTickets, firstname, lastname, email)

			firstnames := getFirstNames()
			fmt.Printf("The first names of bookings are: %v\n", firstnames)

			fmt.Printf("These are all the bookings %v\n", bookings)

			isBookedOut := remainingTickets == 0

			if isBookedOut {
				fmt.Println("Our conference is booked out. Come back later")
				break
			}
		} else {

			if !isNameValid {
				fmt.Println("FirstName or lastName you entered is too short.")
			}

			if !isEmailValid {
				fmt.Println("Email address you entered does not contain @ sign.")
			}

			if !isUserTicketsValid {
				fmt.Println("The number of tickets you entered is invalid.")
			}

			continue
		}

	}

}

func greetUsers() {
	fmt.Printf("Welcome to %v booking application\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceName, remainingTickets)
	fmt.Println("Get you tickets here.")
}

func getFirstNames() []string {
	firstNames := []string{}

	for _, booking := range bookings {
		var names = strings.Fields(booking)
		firstNames = append(firstNames, names[0])
	}

	return firstNames
}

func validateUserInput(firstName string, lastName string, email string, userTickets uint) (bool, bool, bool) {
	isNameValid := len(firstName) >= 2 && len(lastName) >= 2
	isEmailValid := strings.Contains(email, "@")
	isUserTicketsValid := userTickets > 0 && userTickets <= remainingTickets

	return isNameValid, isEmailValid, isUserTicketsValid
}

func getUserInputs() (string, string, string, uint) {
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

	return firstname, lastname, email, userTickets
}

func bookTicket(userTickets uint, firstname string, lastname string, email string) []string {
	remainingTickets = remainingTickets - userTickets
	bookings = append(bookings, firstname+" "+lastname)

	fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation Email at %v\n", firstname, lastname, userTickets, email)
	fmt.Printf("%v tickets remaining for %v\n", remainingTickets, conferenceName)

	return bookings
}
