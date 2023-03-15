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
	fmt.Printf("%T\n", b)

	var numbers = [4]int{1, 2, 3, 4}
	fmt.Println(numbers)

	var cities = []string{"London", "New York"}
	fmt.Println(cities)

	balances := map[string]float64{
		"UDS": 2332,
		"EUR": 233,
	}

	fmt.Println(balances)

	type person struct {
		name string
		age  int
	}

	p := person{
		age:  23,
		name: "Amirhossein",
	}

	fmt.Println(p)

}
