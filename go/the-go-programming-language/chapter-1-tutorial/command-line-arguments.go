package main

import (
	"fmt"
	"os"
	"strings"
	"time"
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

	//for i, arg := range os.Args[1:] {
	//	fmt.Printf("index=%d arg=%v\n", i, arg)
	//}

	//	 Exercise 3
	start := time.Now().Unix()
	fmt.Println(start)
	var arguments, separator string

	for i := 1; i < len(os.Args); i++ {
		arguments += separator + os.Args[i]
		separator = " "
	}

	fmt.Printf("Solution 1 took %v to run", time.Now().Unix()-start)

	start = time.Now().Unix()

	fmt.Println(strings.Join(os.Args[1:], " "))

	fmt.Printf("Solution 2 took %v to run", time.Now().Unix()-start)

}
