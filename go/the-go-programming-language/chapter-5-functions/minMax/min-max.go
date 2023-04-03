package minMax

import "math"

func Min(values ...int) int {

	if len(values) == 0 {
		panic("Min() called with no arguments")
	}

	m := math.MaxInt

	for _, v := range values {
		if v < m {
			m = v
		}
	}

	return m
}

func Max(values ...int) int {

	if len(values) == 0 {
		panic("Max() called with no arguments")
	}

	m := math.MinInt

	for _, v := range values {
		if v > m {
			m = v
		}
	}

	return m
}
