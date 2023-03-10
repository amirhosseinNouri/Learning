package main

import "fmt"

type person struct {
	firstName string
	lastName  string
}

func main() {
	// First way: Not recommended because it depends on the order of properties
	abbas := person{"Abbas", "Masoomi"}
	// Seconds way: Much better
	alex := person{firstName: "Alex", lastName: "Anderson"}
	// Third way: We can get access to zero values
	var amirhossein person
	amirhossein.firstName = "Amirhossein"
	amirhossein.lastName = "Nouri"

	fmt.Println(abbas)
	fmt.Println(alex)
	fmt.Printf("%+v", amirhossein)
}
