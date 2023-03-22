package main

import "fmt"

type Currency int

func main() {
	var a [3]int = [3]int{1, 2, 3}
	fmt.Println(a)

	b := [...]int{1, 2, 3}
	fmt.Println(b)

	const (
		USD Currency = iota
		EUR
		GBP
		RMB
	)

	symbols := [...]string{USD: "$", EUR: "EUR", GBP: "GBP", RMB: "RMB"}
	fmt.Println(symbols)

	r := [...]int{99: -1}
	fmt.Println(r)

	t := [2]int{1, 2}
	s := [...]int{1, 2}
	c := [2]int{1, 3}
	fmt.Println(t == s, t == c, s == c)
}
