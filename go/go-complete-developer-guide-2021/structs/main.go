package main

import "fmt"

type person struct {
	firstName string
	lastName string
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

	var p person;

	p.firstName  ="Amirhossein"
	p.lastName = "Nouri"

	fmt.Println(p)
	fmt.Printf("%+v\n", p)

}