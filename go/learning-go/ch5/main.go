package main

import (
	"errors"
	"fmt"
	"strconv"
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

	fmt.Println()
	fmt.Println("------- Named return values -------")
	res, rem, err := divAndReminder(10, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(res, rem)

	fmt.Println()
	fmt.Println("------- Functions are values -------")
	calculator()

}

type OpFunc func(a int, b int) int

func calculator() {
	opMap := map[string]OpFunc{
		"+": add,
		"-": sub,
		"*": mul,
		"/": div,
	}

	exps := [][]string{
		{"2", "+", "3"},
		{"2", "-", "3"},
		{"2", "*", "3"},
		{"4", "/", "2"},
		{"2"},
		{"a", "+", "2"},
		{"2", "+", "b"},
		{"4", "%", "2"},
	}

	for _, exp := range exps {
		if len(exp) != 3 {
			fmt.Println("Invalid expression: ", exp)
			continue
		}

		p1, err := strconv.Atoi(exp[0])

		if err != nil {
			fmt.Println(err)
			continue
		}

		op := exp[1]
		opFunc, ok := opMap[op]

		if !ok {
			fmt.Println("Unsupported operator: ", op)
			continue
		}

		p2, err := strconv.Atoi(exp[2])

		if err != nil {
			fmt.Println(err)
			continue
		}

		res := opFunc(p1, p2)
		fmt.Printf("%d %s %d = %d", p1, op, p2, res)
		fmt.Println()
	}

}

func add(a int, b int) int {
	return a + b
}

func sub(a int, b int) int {
	return a - b
}

func mul(a int, b int) int {
	return a * b
}

func div(a int, b int) int {
	return a / b
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
