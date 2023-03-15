package main

import (
	"fmt"
	"os"
)

func main() {
	//var arguments, separator string
	//
	//for i := 1; i < len(os.Args); i++ {
	//	arguments += separator + os.Args[i]
	//	separator = " "
	//}
	//
	//fmt.Println(arguments)

	//arguments, separator := "", ""
	//
	//for _, arg := range os.Args[1:] {
	//	arguments += separator + arg
	//	separator = " "
	//}
	//
	//fmt.Println(arguments)

	//fmt.Println(strings.Join(os.Args[1:], " "))

	// Exercise 1
	//fmt.Println(strings.Join(os.Args, " "))

	//	Exercise 2

	for i, arg := range os.Args[1:] {
		fmt.Printf("index=%d arg=%v\n", i, arg)
	}
}
