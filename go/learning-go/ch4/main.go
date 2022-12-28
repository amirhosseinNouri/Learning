package main

import "fmt"

func main() {

	// if n := rand.Intn(10); n == 0 {
	// 	fmt.Println("zero")
	// } else if n > 5 {
	// 	fmt.Println("too big")
	// } else {
	// 	fmt.Println("Good one")
	// }

	evenValues := []int{2, 4, 6, 8, 10}

	for i, v := range evenValues {
		if i == 0 {
			continue
		}

		if i == len(evenValues)-2 {
			break
		}

		fmt.Println(i, v)
	}

	for i := 1; i < len(evenValues)-1; i++ {
		fmt.Println(i, evenValues[i])
	}
}
