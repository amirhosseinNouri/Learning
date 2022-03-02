// Echo prints command-line arguments
package main

import (
	"fmt"
	"os"
	"strings"
	"time"
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

	// // Ex-2
	// for index, arg := range os.Args[1:] {
	// 	fmt.Printf("[%v]: %v\n", index, arg)
	// }

	// Ex-3
	inefficientStart := time.Now()

	s, sep := "", ""
	for _, arg := range os.Args[1:] {
		s += sep + arg
		sep = " "
	}
	fmt.Printf("Inefficient took %v\n", time.Since(inefficientStart))

	efficientStart := time.Now()
	strings.Join(os.Args[1:], " ")
	fmt.Printf("Efficient took %v\n", time.Since(efficientStart))

}
