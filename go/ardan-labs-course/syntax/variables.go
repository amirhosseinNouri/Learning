package main

import "fmt"

func main() {
	var a int
	var b string
	var c float64
	var d bool
	fmt.Printf("var a \t %T [%v]\n", a, a)
	fmt.Printf("var b \t %T [%v]\n", b, b)
	fmt.Printf("var c \t %T [%v]\n", c, c)
	fmt.Printf("var d \t %T [%v]\n", d, d)

	aa := 10
	bb := "hello"
	cc := 3.14
	dd := true
	fmt.Printf("var aa \t %T [%v]\n", aa, aa)
	fmt.Printf("var bb \t %T [%v]\n", bb, bb)
	fmt.Printf("var cc \t %T [%v]\n", cc, cc)
	fmt.Printf("var dd \t %T [%v]\n", dd, dd)

	aaa := int32(10)
	fmt.Printf("var aaa \t %T [%v]\n", aaa, aaa)

}
