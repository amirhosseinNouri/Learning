package main

import "fmt"


type contactInfo struct {
	email string
	zipCode int
}

type person struct {
	firstname string
	lastname string
	contactInfo
}

func main() {
	jim := person{
		firstname: "Jim",
		lastname: "Party",
		contactInfo: contactInfo{
			email: "Jim@gmail.com",
			zipCode: 12344,
		},
	}

	jim.updateName("Jimmy")
	jim.print()

	
}

func (p* person) updateName(newFirstname string){
	p.firstname = newFirstname
}

func (p person) print(){
	fmt.Printf("%v+" , p)
}