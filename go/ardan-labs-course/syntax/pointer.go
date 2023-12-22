package main

import "fmt"

func main() {
	count := 10

	fmt.Println("count:\tValue of [", count, "]\tAddress Of[", &count, "]")
	increment(count)
	fmt.Println("count:\tValue of [", count, "]\tAddress Of[", &count, "]")

}

func increment(inc int) {
	inc++
	fmt.Println("count:\tValue of [", inc, "]\tAddress Of[", &inc, "]")

}
