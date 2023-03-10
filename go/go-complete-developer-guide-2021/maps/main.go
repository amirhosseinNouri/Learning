package main

import "fmt"

func main() {
	// First way.
	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#342435",
		"white": "#ffffff",
	}

	printMap(colors)

}

func printMap(m map[string]string) {

	for key, value := range m {
		fmt.Printf("color=%v hex=%v\n", key, value)
	}
}
