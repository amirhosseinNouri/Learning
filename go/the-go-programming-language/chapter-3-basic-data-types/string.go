package main

import "fmt"

func main() {

	s := `hi
	hello there`

	fmt.Println(s)

	fmt.Println(hasPrefix("ABCD", "AD") == false)
	fmt.Println(hasPrefix("ABCD", "AB") == true)
	fmt.Println(hasSuffix("ABCD", "CD") == true)
	fmt.Println(hasSuffix("ABCD", "CA") == false)
	fmt.Println(contains("ABCDEFG", "EF") == true)
	fmt.Println(contains("ABCDEFG", "FB") == false)
}

func hasPrefix(s, prefix string) bool {
	return len(s) > len(prefix) && s[:len(prefix)] == prefix
}

func hasSuffix(s, suffix string) bool {
	return len(s) > len(suffix) && s[len(s)-len(suffix):] == suffix
}

func contains(s, substr string) bool {
	for i := 0; i < len(s); i++ {
		if hasPrefix(s[i:], substr) {
			return true
		}
	}
	return false
}
