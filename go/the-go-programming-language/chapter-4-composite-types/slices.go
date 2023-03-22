package main

import "fmt"

func main() {
	months := [...]string{
		1:  "Jan",
		2:  "Feb",
		3:  "March",
		4:  "Apr",
		5:  "May",
		6:  "Jun",
		7:  "Jul",
		8:  "Aug",
		9:  "Sept",
		10: "Oct",
		11: "Nov",
		12: "Dec",
	}

	Q2 := months[4:7]
	summer := months[6:9]

	fmt.Println(months)
	fmt.Println(Q2)
	fmt.Println(summer)

	endlessSummer := summer[:5]
	fmt.Println(endlessSummer)

	s := []int{1, 2, 3, 4, 5}
	fmt.Println(s)
	reverse(s)
	fmt.Println(s)

	a := []string{"A", "B", "C"}
	b := []string{"A", "B"}
	c := []string{"A", "B", "C"}

	fmt.Println(compare(a, b) == false)
	fmt.Println(compare(a, c) == true)

}

func reverse(s []int) {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}
}

func compare(x, y []string) bool {
	if len(x) != len(y) {
		return false
	}

	for i := range x {
		if x[i] != y[i] {
			return false
		}
	}

	return true
}
