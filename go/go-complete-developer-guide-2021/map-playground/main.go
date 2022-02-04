package main

import "fmt"

func main() {

	/* First way */
	// colors := map[string]string{
	// 	"red":   "#ff0000",
	// 	"black": "#111111",
	// }

	/* Second way */
	// var colors map[string]string

	/* Third way */
	colors := make(map[string]string)


	colors["white"] = "#ffffff"

	delete(colors , "white")

	fmt.Println(colors)
}
