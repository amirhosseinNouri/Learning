package main

import "fmt"

type tree struct {
	value       int
	left, right *tree
}

func main() {
	v := []int{9, 8, 7, 6, 5, 4, 3, 2, 1}
	fmt.Println(v)
	Sort(v)
	fmt.Println(v)
}

func Sort(values []int) {
	var root *tree

	for _, v := range values {
		root = addValue(root, v)
	}

	appendValues(values[:0], root)
}

func addValue(t *tree, value int) *tree {
	if t == nil {
		t = new(tree)
		t.value = value
		return t
	}

	if value < t.value {
		t.left = addValue(t.left, value)
	} else {
		t.right = addValue(t.right, value)
	}

	return t
}

func appendValues(values []int, t *tree) []int {
	if t != nil {
		values = appendValues(values, t.left)
		values = append(values, t.value)
		values = appendValues(values, t.right)
	}

	return values
}
