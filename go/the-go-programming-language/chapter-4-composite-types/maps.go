package main

import (
	"fmt"
	"sort"
)

func main() {
	//ages := make(map[string]int)

	ages := map[string]int{
		"Alice":       23,
		"Jim":         40,
		"Alex":        20,
		"Amirhossein": 23,
	}

	fmt.Println(ages)
	delete(ages, "Alice")
	fmt.Println(ages)

	ages["Bob"]++
	fmt.Println(ages)

	for k, v := range ages {
		fmt.Printf("key=%s\tvalue=%d\n", k, v)
	}

	//var names []string

	names := make([]string, 0, len(ages))

	for k := range ages {
		names = append(names, k)
	}

	sort.Strings(names)

	fmt.Println("sorted...")
	for _, n := range names {
		fmt.Printf("name=%s\tage=%d\n", n, ages[n])
	}

	if age, ok := ages["Amirhossein"]; ok {
		fmt.Printf("Amirhossein age is %d\n", age)
	}

}
