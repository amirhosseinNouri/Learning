package main

import (
	"fmt"
	"math/rand"
	"time"
)

var heads, tails int

func main() {
	run()
	run()
	run()
	run()
	run()
	run()
	fmt.Printf("heads: %d\ttails: %d\n", heads, tails)
}

func run() {
	switch coinFlip() {
	case "heads":
		heads++
	case "tails":
		tails++
	default:
		fmt.Println("Landed on the edge!")
	}
}

func coinFlip() string {
	rand.Seed(time.Now().UnixNano())
	i := rand.Intn(2)

	if i == 0 {
		return "heads"
	}

	return "tails"
}
