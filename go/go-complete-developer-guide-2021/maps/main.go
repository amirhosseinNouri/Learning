package main

import "fmt"

func main() {
	// First way.
	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#342435",
	}

	fmt.Println(colors)

	// Second way
	var colors2 map[string]string
	fmt.Println(colors2)

	// Third way
	colors3 := make(map[string]string)

	colors3["white"] = "#ffffff"

	fmt.Println(colors3)

	delete(colors3, "white")

	fmt.Println(colors3)

}
