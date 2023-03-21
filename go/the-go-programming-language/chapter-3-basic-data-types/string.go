package main

import (
	"bytes"
	"fmt"
	"strings"
)

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
	fmt.Println(simpleBasename("a/b/c.go") == "c")
	fmt.Println(simpleBasename("c.d.go") == "c.d")
	fmt.Println(simpleBasename("abc") == "abc")
	fmt.Println(comma("123") == "123")
	fmt.Println(comma("1234") == "1,234")
	fmt.Println(intsToString([]int{1, 2, 3, 4}) == "[1 2 3 4]")
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

func simpleBasename(s string) string {
	slash := strings.LastIndex(s, "/")
	s = s[slash+1:]

	if dot := strings.LastIndex(s, "."); dot >= 0 {
		s = s[:dot]
	}

	return s
}

func comma(s string) string {
	n := len(s)

	if n <= 3 {
		return s
	}

	return comma(s[:n-3]) + "," + s[n-3:]
}

func intsToString(values []int) string {
	var buf bytes.Buffer
	buf.WriteRune('[')

	for i, v := range values {
		if i > 0 {
			buf.WriteString(" ")
		}

		fmt.Fprintf(&buf, "%d", v)
	}

	buf.WriteRune(']')
	return buf.String()
}
