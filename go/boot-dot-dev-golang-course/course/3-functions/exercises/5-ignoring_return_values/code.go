package main

import "fmt"

func main() {
	firstName, lastName := getNames()
	fmt.Println("Welcome to Textio,", firstName)
}

// don't edit below this line

func getNames() (string, string) {
	return "John", "Doe"
}
