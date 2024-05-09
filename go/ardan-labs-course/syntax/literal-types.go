package main

import "fmt"

func main() {

	e := struct {
		// Literal type
		flag bool
	}{flag: true} // Literal construction

	fmt.Println(e)
}
