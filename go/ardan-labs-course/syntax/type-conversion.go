package main

import "fmt"

type example struct {
	flag    bool
	counter int16
	pi      float32
}

type example2 struct {
	flag    bool
	counter int16
	pi      float32
}

func main() {

	e := struct {
		flag    bool
		counter int16
		pi      float32
	}{flag: true, counter: 10, pi: 3.14}

	var ex example

	ex = e

	fmt.Printf("%+v\n", e)
	fmt.Printf("%+v\n", ex)

	var e1 example
	var e2 example2

	e1 = example(e2)

	fmt.Printf("%+v\n", e1)

	var signedInt int
	var unsignedInt uint

	signedInt = int(unsignedInt)

	fmt.Printf("%v\n", signedInt)
}
