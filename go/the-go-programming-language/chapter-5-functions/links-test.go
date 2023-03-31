package main

import (
	links2 "chapter-5-functions/links"
	"fmt"
	"log"
	"os"
)

func main() {

	links, err := links2.Extract(os.Args[1])

	if err != nil {
		log.Fatalf("failed to extract the links: %s", err)
	}

	for i, l := range links {
		fmt.Printf("%d\t%s\n", i+1, l)
	}
}
