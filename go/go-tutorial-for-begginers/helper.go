package main

import "strings"

func validateFirstNameAndLastName(firstName, lastName string) bool {
	return len(firstName) >= 2 && len(lastName) >= 2
}

func validateEmail(email string) bool {
	return strings.Contains(email, "@")
}

func validateUserTickets(userTickets uint) bool {
	return userTickets > 0 && userTickets <= remainingTickets
}
