package main

import (
	"fmt"
	"log"
	"os"
)

var cwd string

func init() {
	var err error
	cwd, err = os.Getwd()

	if err != nil {
		log.Fatalf("os.GetWd failed: %v", err)
	}

	fmt.Printf("init: %s\n", cwd)

}

func main() {
	fmt.Printf("main: %s\n", cwd)
}
