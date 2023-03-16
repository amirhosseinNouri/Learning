package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	files := os.Args[1:]
	filesWithRedundantLine := make([]string, 0)

	for _, arg := range files {
		f, err := os.Open(arg)

		if err != nil {
			_, _ = fmt.Fprintf(os.Stderr, "dup-2: %v\n", err)
			continue
		}

		o := calculateOccurrence(f)
		if hasDuplicateLine(o) {
			filesWithRedundantLine = append(filesWithRedundantLine, arg)
		}

		_ = f.Close()
	}

	for _, file := range filesWithRedundantLine {
		fmt.Println(file)
	}

}

func calculateOccurrence(f *os.File) map[string]int {
	input := bufio.NewScanner(f)
	occurrence := make(map[string]int)
	for input.Scan() {
		occurrence[input.Text()]++
	}

	return occurrence
}

func hasDuplicateLine(m map[string]int) bool {
	for _, n := range m {
		if n > 1 {
			return true
		}

	}

	return false
}
