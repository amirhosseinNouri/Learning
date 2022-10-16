package main

import "fmt"

func main() {

	var x [3]int // size and type
	fmt.Println(x[0])

	var y = [3]int{3, 3, 30}

	fmt.Println(y[2])

	var z = [6]int{0, 3: 200, 5: 300}

	fmt.Println(z)

	var q = [...]int{1, 2, 3}

	fmt.Println(q)

}
