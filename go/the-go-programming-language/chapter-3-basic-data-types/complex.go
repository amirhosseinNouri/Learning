package main

import "fmt"

func main() {
	x := complex(1, 2)
	y := complex(3, 4)
	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(x * y)
	fmt.Println(real(x))
	fmt.Println(imag(x))

	z := 2i
	fmt.Println(z)
	fmt.Println(real(z))
	fmt.Println(imag(z))

	t := 2 + 5i
	fmt.Println(t)
}
