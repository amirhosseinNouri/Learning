package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var reader  *bufio.Reader
func main() {

		
		reader = bufio.NewReader(os.Stdin)
		featureSize := getFeatureSize()
		feaures := getTokens(featureSize)

		querySize  := parseInt(getLine())
		var results []string

		for i := 0 ; i < querySize ; i ++ {
			query := strings.ToLower(getLine())
			if contains(feaures , query ) {
				results =  append(results ,"yes" )
			}else {
				results =  append(results ,"no" )	
			}
		}

		print(results)
		

}

func getLine() string {
	
	inp, err := reader.ReadString('\n')
	if err != nil {
		panic("cannot read from stdin")
	}
	return strings.TrimSpace(inp)
}

func getFeatureSize() int {
	line := getLine()
	splited := strings.Split(line , " ")
	return parseInt(splited[1])
}

func parseInt(s string) int {
	parsed , _ := strconv.Atoi(s)
	return parsed

}

func contains(s []string, str string) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}

	return false
}

func print(s []string) {
	for i := range s {
		fmt.Println(s[i])
	}
}

func getTokens(size int) []string {
	var result []string
	for i := 0 ; i < size ; i ++ {
		token := strings.ToLower(getLine())
		result = append(result, token )
	}

	return result
}