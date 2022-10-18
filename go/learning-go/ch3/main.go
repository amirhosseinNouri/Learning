package main

import "fmt"

func main() {

	// var x [3]int // size and type
	// fmt.Println(x[0])

	// var y = [3]int{3, 3, 30}

	// fmt.Println(y[2])

	// var z = [6]int{0, 3: 200, 5: 300}

	// fmt.Println(z)

	// var q = [...]int{1, 2, 3}

	// fmt.Println(q)

	// var x = []int{10, 20, 30}
	// fmt.Println(x)

	// x = append(x, 100)

	// fmt.Println(x)

	// var a = []int{1, 2, 3}
	// var b = []int{4, 5, 6}
	// a = append(a, b...)

	// fmt.Println(a, len(a), cap(a))

	// a = append(a, 10)

	// fmt.Println(a, len(a), cap(a))

	// y := make([]int, 10, 20)
	// fmt.Println(y, len(y), cap(y))

	// t := make([]int, 5)
	// t = append(t, 10)
	// fmt.Println(t)

	// s := make([]int, 0, 10)
	// s = append(s, 1, 2, 3, 34, 4)
	// fmt.Println(s)

	// firstSlice := []int{1, 2, 3, 4}
	// secondSlice := firstSlice[:2]
	// fmt.Println(secondSlice)

	// fmt.Println("--")
	// a1 := []int{1, 2, 3, 4}
	// a2 := a1[:]
	// a3 := a1[:]
	// fmt.Println(a1, a2, a3)
	// a1[0] = 100
	// fmt.Println(a1, a2, a3)
	// a3[3] = 400
	// fmt.Println(a1, a2, a3)

	// var nilMap map[string]int // nil map

	// var emptyMap := map[string]int{}; // empty map

	// ages := make(map[int]string, 10)

	// dumbMap := map[string]int{
	// 	"hello": 5,
	// 	"world": 0,
	// }

	// value, ok := dumbMap["hello"]
	// fmt.Println(value, ok)

	// value, ok = dumbMap["dumb"]
	// fmt.Println(value, ok)

	// delete(dumbMap, "hello")
	// fmt.Println(value, ok)

	intSet := map[int]bool{}

	values := []int{1, 1, 1, 1, 1, 1, 2}

	for _, v := range values {
		intSet[v] = true
	}

	fmt.Println(len(values), len(intSet))

	fmt.Println(intSet[100])

	if intSet[1] {
		fmt.Println("1 is in the set")
	}

	if intSet[100] {
		fmt.Println("100 is in the set")
	}

}
