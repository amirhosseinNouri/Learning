package main

import (
	"errors"
	"fmt"
)

func main() {
	fmt.Println()
	fmt.Println("------- Variadic parameter -------")
	fmt.Println(addTo(3))
	fmt.Println(addTo(3, 2))
	fmt.Println(addTo(3, 2, 3))

	a := []int{3, 4}
	fmt.Println(addTo(1, a...))
	fmt.Println(addTo(1, []int{1, 2}...))

	fmt.Println("------- Named return values -------")
	res, rem, err := divAndReminder(10, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(res, rem)

}

func addTo(base int, vals ...int) []int {
	result := make([]int, 0, len(vals))

	for _, v := range vals {
		result = append(result, v+base)
	}

	return result
}

func divAndReminder(a int, b int) (result int, reminder int, err error) {
	// They act as pre-declared variables
	if b == 0 {
		err = errors.New("cannot divide by zero")
		return result, reminder, err
	}

	result = a / b
	reminder = a % b
	return result, reminder, nil
}
