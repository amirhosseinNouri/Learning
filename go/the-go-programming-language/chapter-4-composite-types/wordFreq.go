package main

import (
	"fmt"
	"log"
	"os"
	"strings"
)

func main() {
	wordsFreq := make(map[string]int)
	fileName := os.Args[1]
	data, err := os.ReadFile(fileName)

	if err != nil {
		log.Fatalf("Failed to read file %s", fileName)
	}

	lines := string(data)

	for _, line := range strings.Split(lines, "\n") {
		words := strings.Split(line, " ")

		for _, word := range words {
			wordsFreq[word]++
		}
	}

	for k, v := range wordsFreq {
		fmt.Printf("%s\t%d\n", k, v)
	}
}
