package main

import (
	"fmt"
	"math/rand"
)

func main() {

	if n := rand.Intn(10); n == 0 {
		fmt.Println("zero")
	} else if n > 5 {
		fmt.Println("too big")
	} else {
		fmt.Println("Good one")
	}
}
