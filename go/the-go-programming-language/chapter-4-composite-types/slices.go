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

	fmt.Println("--- appendInt ---")
	//t1 := []int{1, 2, 3}
	t1 := make([]int, 3, 5)
	t1[0] = 1
	t1[1] = 2
	t1[2] = 3
	fmt.Printf("t1 len=%d t1 cap=%d\n", len(t1), cap(t1))
	fmt.Println(t1)
	t2 := appendInt(t1, 4)
	fmt.Println(t2)

	fmt.Println("after modification")
	t2[0] = -1
	fmt.Println(t1)
	fmt.Println(t2)

	fmt.Println("--- multiple appends ---")

	var x, y []int

	for i := 0; i < 10; i++ {
		y = appendInt(x, i)
		fmt.Printf("%d\tcap=%d\t%v\n", i, cap(y), y)
		x = y
	}

	fmt.Println("--- non empty function ---")
	n := []string{"One", "", "Three"}
	n = nonEmpty(n)
	fmt.Printf("%q\n", n)

	n2 := []string{"One", "", "Three"}
	n2 = nonEmpty2(n2)
	fmt.Printf("%q\n", n2)

	fmt.Println("--- reverse array ---")
	arr := [4]int{1, 2, 3, 4}
	fmt.Println(arr)
	reverseArray(&arr)
	fmt.Println(arr)

	fmt.Println("--- rotate ---")
	r := []int{1, 2, 3, 4, 5}
	fmt.Println(r)
	rotate(r, 2)
	fmt.Println(r)

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

func appendInt(x []int, y int) []int {
	var z []int

	xLen := len(x)
	zLen := xLen + 1

	if zLen < cap(x) {
		fmt.Println("*** using the same slice ***")
		z = x[:zLen]
	} else {
		fmt.Println("*** Expanding the slice ***")
		zCap := zLen
		if zCap < 2*xLen {
			zCap = 2 * xLen
		}

		z = make([]int, zLen, zCap)
		copy(z, x)
	}

	z[xLen] = y

	return z
}

func nonEmpty(s []string) []string {
	i := 0

	for _, v := range s {
		if v != "" {
			s[i] = v
			i++
		}
	}

	return s[:i]
}

func nonEmpty2(s []string) []string {
	out := s[:0]

	for _, v := range s {
		if v != "" {
			out = append(out, v)
		}
	}

	return out
}

func reverseArray(a *[4]int) {
	for i, j := 0, len(*a)-1; i < j; i, j = i+1, j-1 {
		(*a)[i], (*a)[j] = (*a)[j], (*a)[i]
	}
}

func rotate(nums []int, k int) {
	n := len(nums)
	k %= n

	reverse(nums[:n-k])
	reverse(nums[n-k:])
	reverse(nums)
}