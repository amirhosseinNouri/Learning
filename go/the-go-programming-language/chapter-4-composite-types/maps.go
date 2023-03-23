package main

import (
	"fmt"
	"sort"
)

var m = make(map[string]int)

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

	m1 := map[string]int{
		"A": 1,
		"B": 2,
	}

	m2 := map[string]int{
		"A": 1,
		"B": 2,
	}

	m3 := map[string]int{
		"A": 1,
		"B": 2,
		"C": 3,
	}

	fmt.Println(equal(m1, m2) == true)
	fmt.Println(equal(m1, m3) == false)

	l1 := []string{"A", "B", "C"}
	l2 := []string{"A", "B", "D"}

	add(l1)
	add(l1)
	add(l1)
	add(l2)
	add(l2)

	fmt.Printf("count l1=%d\n", count(l1))
	fmt.Printf("count l2=%d\n", count(l2))

}

func k(list []string) string {
	return fmt.Sprintf("%q", list)
}

func add(list []string) {
	m[k(list)]++
}

func count(list []string) int {
	return m[k(list)]
}

func equal(a, b map[string]int) bool {
	if len(a) != len(b) {
		return false
	}

	for k, va := range a {
		if vb, ok := b[k]; !ok || vb != va {
			return false
		}
	}

	return true
}
