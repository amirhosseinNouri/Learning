package main

import (
	"errors"
	"fmt"
	"io"
	"log"
	"os"
	"sort"
	"strconv"
)

type Person struct {
	name string
	age  int
}

func main() {
	fmt.Println()
	fmt.Println("------- Variadic parameter -------")
	fmt.Println(addTo(3))
	fmt.Println(addTo(3, 2))
	fmt.Println(addTo(3, 2, 3))

	a := []int{3, 4}
	fmt.Println(addTo(1, a...))
	fmt.Println(addTo(1, []int{1, 2}...))

	fmt.Println()
	fmt.Println("------- Named return values -------")
	res, rem, err := divAndReminder(10, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(res, rem)

	fmt.Println()
	fmt.Println("------- Functions are values -------")
	calculator()

	fmt.Println()
	fmt.Println("------- Anonymous Functions -------")
	anonymousFunc()

	fmt.Println()
	fmt.Println("------- Pass functions as parameters -------")
	passFuncAsParameter()

	fmt.Println()
	fmt.Println("------- Returning functions from functions -------")
	returningFuncFromFunc()

	fmt.Println()
	fmt.Println("------- Defer -------")
	cat()
	fmt.Println()
	catV2()

	fmt.Println()
	fmt.Println("------- Call by value -------")
	callByValue()

}

func callByValue() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(nums)
	mutateSlice(nums)
	fmt.Println(nums)

	p := Person{
		name: "A",
		age:  10,
	}

	fmt.Println(p)
	mutatePerson(p)
	fmt.Println(p)

}

func mutatePerson(p Person) {
	p.name = "B"
}

func mutateSlice(s []int) {

	for i, v := range s {
		s[i] = v * 2
	}

	s = append(s, 10)
}

func getFile(name string) (*os.File, func(), error) {
	f, err := os.Open(name)

	if err != nil {
		return nil, nil, err
	}

	return f, func() {
		f.Close()
	}, err
}

func catV2() {
	if len(os.Args) < 2 {
		log.Fatal("No file specified")
	}

	f, closer, err := getFile(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}

	defer closer()

	data := make([]byte, 2048)

	for {
		c, err := f.Read(data)
		os.Stdout.Write(data[:c])

		if err != nil {

			if err != io.EOF {
				log.Fatal(err)
			}

			break
		}
	}
}

func cat() {
	if len(os.Args) < 2 {
		log.Fatal("No file specified")
	}

	f, err := os.Open(os.Args[1])

	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	data := make([]byte, 2048)

	for {
		count, err := f.Read(data)
		os.Stdout.Write(data[:count])

		if err != nil {

			if err != io.EOF {
				log.Fatal(err)
			}
			break

		}

	}

}

func makeMult(base int) func(int) int {
	return func(factor int) int {
		return factor * base
	}
}

func returningFuncFromFunc() {
	mult2 := makeMult(2)
	fmt.Println(mult2(10))
}

func passFuncAsParameter() {
	type person struct {
		FirstName string
		LastName  string
		Age       int
	}

	people := []person{
		{FirstName: "A", LastName: "B", Age: 20},
		{FirstName: "D", LastName: "S", Age: 21},
		{FirstName: "Z", LastName: "G", Age: 22},
	}

	fmt.Println(people)

	sort.Slice(people, func(i int, j int) bool {
		return people[i].LastName < people[j].LastName
	})

	fmt.Println(people)

	sort.Slice(people, func(i int, j int) bool {
		return people[i].Age < people[j].Age
	})

	fmt.Println(people)

}

func anonymousFunc() {
	for i := 0; i < 5; i++ {

		func(j int) {
			fmt.Println("Printing J from inside of an anonymous func: ", j)
		}(i)
	}
}

type OpFunc func(a int, b int) int

func calculator() {
	opMap := map[string]OpFunc{
		"+": add,
		"-": sub,
		"*": mul,
		"/": div,
	}

	exps := [][]string{
		{"2", "+", "3"},
		{"2", "-", "3"},
		{"2", "*", "3"},
		{"4", "/", "2"},
		{"2"},
		{"a", "+", "2"},
		{"2", "+", "b"},
		{"4", "%", "2"},
	}

	for _, exp := range exps {
		if len(exp) != 3 {
			fmt.Println("Invalid expression: ", exp)
			continue
		}

		p1, err := strconv.Atoi(exp[0])

		if err != nil {
			fmt.Println(err)
			continue
		}

		op := exp[1]
		opFunc, ok := opMap[op]

		if !ok {
			fmt.Println("Unsupported operator: ", op)
			continue
		}

		p2, err := strconv.Atoi(exp[2])

		if err != nil {
			fmt.Println(err)
			continue
		}

		res := opFunc(p1, p2)
		fmt.Printf("%d %s %d = %d", p1, op, p2, res)
		fmt.Println()
	}

}

func add(a int, b int) int {
	return a + b
}

func sub(a int, b int) int {
	return a - b
}

func mul(a int, b int) int {
	return a * b
}

func div(a int, b int) int {
	return a / b
}

func addTo(base int, vals ...int) []int {
	result := make([]int, 0, len(vals))

	for _, v := range vals {
		result = append(result, v+base)
	}

	return result
}

func divAndReminder(a int, b int) (result int, reminder int, err error) {
	// They act as pre-declared variables
	if b == 0 {
		err = errors.New("cannot divide by zero")
		return result, reminder, err
	}

	result = a / b
	reminder = a % b
	return result, reminder, nil
}
