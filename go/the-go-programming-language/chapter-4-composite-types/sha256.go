package main

import (
	"crypto/sha256"
	"fmt"
)

func main() {
	c1 := sha256.Sum256([]byte("x"))
	c2 := sha256.Sum256([]byte("X"))
	c3 := sha256.Sum256([]byte("X"))

	//fmt.Printf("%x\n%x\n%t\n%T\n", c1, c2, c1 == c2, c1)

	fmt.Println(compareBits(c1, c2))
	fmt.Println(compareBits(c2, c3))

}

func compareBits(a, b [32]byte) int {

	aBits := bytesToBits(a)
	bBits := bytesToBits(b)

	var diff int

	for i, v := range aBits {
		if bBits[i] != v {
			diff++
		}
	}

	return diff

}

func bytesToBits(b [32]byte) []string {
	bitArray := make([]string, len(b)*8)

	for i := 0; i < len(b); i++ {
		for j := 0; j < 8; j++ {
			bit := b[i] & (1 << j)
			if bit > 0 {
				bitArray[(i*8)+j] = "1"
			} else {
				bitArray[(i*8)+j] = "0"
			}
		}
	}

	return bitArray

}
