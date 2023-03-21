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
	fmt.Println(basename("a/b/c.go") == "c")
	fmt.Println(basename("c.d.go") == "c.d")
	fmt.Println(basename("abc") == "abc")
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

func basename(s string) string {
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '/' {
			s = s[i+1:]
		}
	}

	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '.' {
			s = s[:i]
			break
		}
	}

	return s

}
