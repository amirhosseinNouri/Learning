package main

import "fmt"

// An IntList is a linked list of integers.
// A nil *IntList represents the empty list.
type IntList struct {
	Value int
	Tail  *IntList
}

func (list *IntList) Sum() int {
	if list == nil {
		return 0
	}

	return list.Value + list.Tail.Sum()

}

func main() {
	l := IntList{Value: 1,
		Tail: &IntList{Value: 2,
			Tail: &IntList{Value: 3,
				Tail: &IntList{Value: 4,
					Tail: nil}},
		}}

	fmt.Println(l.Sum())

	var l2 *IntList = nil

	fmt.Println(l2.Sum())

}
