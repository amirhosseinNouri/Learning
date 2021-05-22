package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {

	lines := getLine()
	words := getWords(lines)
	status := 0

	for _,word := range words {
		runes := getRunes(word)
		status += sumAscii(runes)
	}

	if isTooShort(status) {
		fmt.Println("err")
		return
	}
	status += addSpacesAscii(len(words) - 1)
	status = fitRange(status)
	fmt.Println(status)



	

}

func getLine() string {
	reader := bufio.NewReader(os.Stdin)
	inp, err := reader.ReadString('\n')
	if err != nil {
		panic("cannot read from stdin")
	}
	return strings.TrimSpace(inp)
}

func getWords(line string) []string {
	return strings.Split(line , " ")
}

func getRunes(words string) []rune {
	return []rune(words)
}

func sumAscii(runes []rune) int{
	sum := 0
	for _, r := range runes {
		sum += int(r)
	}

	return sum
}

func addSpacesAscii(numOfSpaces int) int {
	return 32 * numOfSpaces
}

func fitRange(status int) int {
	for !isInRange(status) {
		status = status / 2;
	}

	return status

}

func isInRange(status int) bool {
	return status < 399 && status > 200
}

func isTooShort(status int) bool {
	return status < 200
}