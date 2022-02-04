package main

import "fmt"


type contactInfo struct {
	email string
	zipCode int
}
type person struct {
	firstName string
	lastName string
	contactInfo
}

func main(){

	amir := person {
		firstName: "Amirhossein",
		lastName: "Nouri",
		contactInfo: contactInfo{
			email: "Amirhossein@nouri",
			zipCode: 123,
		},
	}

	amir.printFirstName()
	amir.updateName("Amir")
	amir.printFirstName()


}

func (p person) print(){
	fmt.Printf("%+v\n", p)

}

func (p person) printFirstName(){
	fmt.Println(p.firstName)
}

func (p *person) updateName(newFirstName string){
	(*p).firstName = newFirstName
}