package main

import "fmt"

func main() {
	var i1 int8 = 100
	fmt.Printf("%T\n", i1)

	var i2 uint16 = 65535
	fmt.Printf("%T\n", i2)

	var r rune = 'f'
	fmt.Printf("%T\n", r)
	fmt.Println(r)

	var b bool = true
	fmt.Printf("%T", b)
}
