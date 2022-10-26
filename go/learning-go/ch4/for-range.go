package main

import "fmt"

func main() {
	evenValues := []int{2, 4, 6, 8, 10, 12}

	for i, v := range evenValues {
		fmt.Println(i, v)
	}

	for _, v := range evenValues {
		fmt.Println(v)
	}

	uniqueNames := map[string]bool{"fred": true, "Raul": true, "billy": true}

	for k := range uniqueNames {
		fmt.Println(k)
	}

	m := map[string]int{
		"a": 1,
		"c": 3,
		"b": 2,
	}

	for i := 0; i < 3; i++ {
		fmt.Println("Loop ", i)

		for k, v := range m {
			fmt.Println(k, v)
		}
	}

	samples := []string{"hello", "worldﾬ"}

	fmt.Println("----")

	for _, sample := range samples {
		for i, r := range sample {
			fmt.Println(i, r, string(r))
		}
	}

}
