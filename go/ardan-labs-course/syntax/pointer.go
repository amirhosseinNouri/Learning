package main

import "fmt"

func main() {

	count := 10

	fmt.Printf("count Value: [ %v ]\t Address of count: [ %v ]\n", count, &count)

	increment(count)

	fmt.Printf("count Value: [ %v ]\t Address of count: [ %v ]\n", count, &count)

}

func increment(inc int) {
	inc++
	fmt.Printf("count Value: [ %v ]\t Address of count: [ %v ]\n", inc, &inc)

}
