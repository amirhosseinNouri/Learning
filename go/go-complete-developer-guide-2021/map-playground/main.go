package main

import "fmt"

func main() {

	/* First way */
	colors := map[string]string{
		"red":   "#ff0000",
		"black": "#111111",
		"white": "#ffffff",
	}

	// fmt.Println(colors)
	printMap(colors)
}

func printMap(c map[string]string) {
	for key, value := range c {
		fmt.Printf("%v=%v\n", key, value)
	}
}
