// Echo prints command-line arguments
package main

import (
	"fmt"
	"os"
)

func main() {

	// s, sep := "", ""
	// for _, arg := range os.Args[1:] {
	// 	s += sep + arg
	// 	sep = " "
	// }
	// fmt.Println(s)

	// fmt.Println(strings.Join(os.Args[1:], " "))

	// Ex-1
	// fmt.Println(strings.Join(os.Args, " "))

	// Ex-2
	for index, arg := range os.Args[1:] {
		fmt.Printf("[%v]: %v\n", index, arg)
	}

}
