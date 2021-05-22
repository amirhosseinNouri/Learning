package main

import "fmt"


type contactInfo struct {
	email string
	zipCode int
}

type person struct {
	firstname string
	lastname string
	contact contactInfo
}

func main() {
	jim := person{
		firstname: "Jim",
		lastname: "Party",
		contact: contactInfo{
			email: "Jim@gmail.com",
			zipCode: 12344,
		},
	}

	fmt.Printf("%v+" , jim)
}