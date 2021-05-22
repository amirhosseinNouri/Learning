package main

import "fmt"



type person struct {
	firstname string
	lastname string
}

func main() {
	var amir person
	amir.firstname = "Amirhossein"
	amir.lastname = "Nouri"
	fmt.Println(amir)
	fmt.Printf("%+v" , amir)
}