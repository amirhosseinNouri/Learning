package main

import "fmt"

func main() {
	fmt.Println()
	fmt.Println("------- Variadic parameter -------")
	fmt.Println(addTo(3))
	fmt.Println(addTo(3, 2))
	fmt.Println(addTo(3, 2, 3))

	a := []int{3, 4}
	fmt.Println(addTo(1, a...))
	fmt.Println(addTo(1, []int{1, 2}...))

}

func addTo(base int, vals ...int) []int {
	result := make([]int, 0, len(vals))

	for _, v := range vals {
		result = append(result, v+base)
	}

	return result
}
