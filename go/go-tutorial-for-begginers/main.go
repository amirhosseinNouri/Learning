package main

import (
	"booking-app/helper"
	"fmt"
	"strings"
	"time"
)

type user struct {
	firstName       string
	lastName        string
	email           string
	numberOfTickets uint
}

const (
	conferenceTickets = 50
	conferenceName    = "Go conference"
)

var remainingTickets uint = conferenceTickets
var bookings = make([]user, 0)

func main() {
	greetUsers()

	for {

		firstName, lastName, email, userTickets := getUserInputs()

		if isValidName := helper.ValidateFirstNameAndLastName(firstName, lastName); !isValidName {
			fmt.Println("Firstname and lastname should be at least 2 characters.")
			continue
		}

		if isValidEmail := helper.ValidateEmail(email); !isValidEmail {
			fmt.Println("Invalid email address. Try again.")
			continue
		}

		if isValidUserTickets := helper.ValidateUserTickets(userTickets, remainingTickets); !isValidUserTickets {
			fmt.Println("Invalid number of tickets. Try again.")
			continue
		}

		if userTickets > remainingTickets {
			fmt.Printf("We only have %v tickets remaining, so you can not book %v tickets.\n", remainingTickets, userTickets)
			continue
		}

		bookTicket(userTickets, firstName, lastName, email)
		go sendTicket(userTickets, firstName, lastName, email)

		firstNames := getFirstNames()
		fmt.Printf("The first names of bookings are: %v\n", firstNames)

		if remainingTickets == 0 {
			fmt.Printf("%v is booked out. Come back next year.\n", conferenceName)
			break
		}
	}
}

func greetUsers() {
	fmt.Printf("Welcome to %v booking application.\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
}

func getFirstNames() []string {
	var firstNames []string

	for _, userData := range bookings {
		firstNames = append(firstNames, strings.Fields(userData.firstName)[0])
	}
	return firstNames
}

func getUserInputs() (firstName, lastName, userEmail string, userTickets uint) {
	var first string
	var last string
	var email string
	var tickets uint

	fmt.Printf("Enter your fist name: ")
	fmt.Scan(&first)

	fmt.Printf("Enter your last name: ")
	fmt.Scan(&last)

	fmt.Printf("Enter your email: ")
	fmt.Scan(&email)

	fmt.Printf("Enter the number of tickets you want: ")
	fmt.Scan(&tickets)

	return first, last, email, tickets
}

func bookTicket(userTickets uint, firstName, lastName, email string) {
	remainingTickets -= userTickets

	user := user{firstName: firstName, lastName: lastName, email: email, numberOfTickets: userTickets}
	bookings = append(bookings, user)

	fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation email at %v\n", firstName, lastName, userTickets, email)

	fmt.Printf("%v remained tickets.\n", remainingTickets)
}

func sendTicket(userTickets uint, firstName, lastName, email string) {
	time.Sleep(10 * time.Second)
	ticket := fmt.Sprintf("%v tickets for %v %v", userTickets, firstName, lastName)
	fmt.Println("#######")
	fmt.Printf("Sending %v ticket to email address %v\n", ticket, email)
	fmt.Println("#######")
}
