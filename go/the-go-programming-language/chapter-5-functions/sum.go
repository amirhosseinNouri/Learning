package main

import (
	"fmt"
	"os"
)

func main() {

	fmt.Println(sum(1, 2, 3, 4, 5))

	values := []int{1, 2, 3, 4, 5}

	fmt.Println(sum(values...))

	linenum, name := 12, "count"
	errorf(linenum, "undefined: %s", name)
}

func sum(vals ...int) int {

	total := 0

	for _, val := range vals {
		total += val
	}

	return total
}

func errorf(linenum int, format string, args ...interface{}) {
	fmt.Fprintf(os.Stderr, "Line %d: ", linenum)
	fmt.Fprintf(os.Stderr, format, args...)
	fmt.Fprintln(os.Stderr)
}
