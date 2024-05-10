package helper

import (
	"strings"
)

func ValidateFirstNameAndLastName(firstName, lastName string) bool {
	return len(firstName) >= 2 && len(lastName) >= 2
}

func ValidateEmail(email string) bool {
	return strings.Contains(email, "@")
}

func ValidateUserTickets(userTickets, remainingTickets uint) bool {
	return userTickets > 0 && userTickets <= remainingTickets
}
