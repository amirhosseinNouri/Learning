package main

import (
	"fmt"
	"math"
)

func main() {

	fmt.Println(math.MaxFloat64)
	fmt.Printf("%g\n", math.MaxFloat64)

	nan := math.NaN()
	fmt.Println(nan == nan, nan < nan, nan > nan)
}
