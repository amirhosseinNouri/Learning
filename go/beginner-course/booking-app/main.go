package main

import (
	"booking-app/helper"
	"fmt"
	"strconv"
)

const conferenceTickets = 50

var conferenceName = "Go conference"
var remainingTickets uint = conferenceTickets
var bookings = make([]map[string]string, 0)

func main() {

	greetUsers()

	for {

		firstname, lastname, email, userTickets := getUserInputs()

		isNameValid, isEmailValid, isUserTicketsValid := helper.ValidateUserInput(firstname, lastname, email, userTickets, remainingTickets)

		if isNameValid && isEmailValid && isUserTicketsValid {

			bookTicket(userTickets, firstname, lastname, email)

			firstnames := getFirstNames()

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
		firstNames = append(firstNames, booking["firstname"])
	}

	return firstNames
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

func bookTicket(userTickets uint, firstname string, lastname string, email string) {
	remainingTickets = remainingTickets - userTickets

	// create a map for user
	var userData = createUser(firstname, lastname, email, userTickets)

	bookings = append(bookings, userData)
	fmt.Printf("List of booking is: %v\n", bookings)

	fmt.Printf("Thank you %v %v for booking %v tickets. You will receive a confirmation Email at %v\n", firstname, lastname, userTickets, email)
	fmt.Printf("%v tickets remaining for %v\n", remainingTickets, conferenceName)

}

func createUser(firsname string, lastname string, email string, userTickets uint) map[string]string {
	var user = make(map[string]string)
	user[firsname] = firsname
	user[lastname] = lastname
	user[email] = email
	user["numberOfTickets"] = strconv.FormatUint(uint64(userTickets), 10)

	return user
}
