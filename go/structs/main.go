package main

import "fmt"



type person struct {
	firstname string
	lastname string
}

func main() {
	amir := person{firstname : "Amirhossein" , lastname : "Nouri"}
	fmt.Println(amir)
}