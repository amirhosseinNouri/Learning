package main

import (
	"bufio"
	"crypto/sha256"
	"crypto/sha512"
	"flag"
	"fmt"
	"log"
	"os"
)

type HashFunction string

func main() {

	fn := flag.String("hash", "sha256", "Specifies the hash function. You can pass down sha384 or sha512")
	flag.Parse()

	input := getInput()
	bi := []byte(input)

	switch *fn {
	case "sha256":
		fmt.Println(sha256.Sum256(bi))
	case "sha384":
		fmt.Println(sha512.Sum384(bi))
	case "sha512":
		fmt.Println(sha512.Sum512(bi))
	default:
		log.Fatalf("Unsupported hash function: %s", *fn)
	}

}

func getInput() string {
	s := bufio.NewScanner(os.Stdin)
	fmt.Print("Enter the text: ")
	s.Scan()
	return s.Text()
}
