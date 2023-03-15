package main

import (
	"fmt"
	"os"
)

func main() {
	var arguments, separator string

	for i := 1; i < len(os.Args); i++ {
		arguments += separator + os.Args[i]
		separator = " "
	}

	fmt.Println(arguments)
}
