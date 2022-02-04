package main

import "fmt"


type contactInfo struct {
	email string
	zipCode int
}
type person struct {
	firstName string
	lastName string
	contact contactInfo
}

func main(){


	// p := person {
	// 	 "Amirhossein",
	// 	 "Nouri",
	// }


	// p := person {
	// 	firstName: "Amirhossein",
	// 	lastName: "Nouri",
	// }

	// var p person;

	// p.firstName  ="Amirhossein"
	// p.lastName = "Nouri"

	p := person {
		firstName: "Amirhossein",
		lastName: "Nouri",
		contact: contactInfo{
			email: "Amirhossein@nouri",
			zipCode: 123,
		},
	}

	fmt.Printf("%+v\n", p)

}