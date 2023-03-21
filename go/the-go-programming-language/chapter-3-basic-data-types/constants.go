package main

type Weekday int

func main() {
	const (
		pi = 3.14
		e  = 2.71
	)

	const (
		Sunday Weekday = iota
		Monday
		Tuesday
		Wednesday
		Thursday
		Friday
		Saturday
	)
}
