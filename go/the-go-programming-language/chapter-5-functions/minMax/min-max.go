package minMax

import "math"

func Min(values ...int) int {
	m := math.MaxInt

	for _, v := range values {
		if v < m {
			m = v
		}
	}

	return m
}

func Max(values ...int) int {
	m := math.MinInt

	for _, v := range values {
		if v > m {
			m = v
		}
	}

	return m
}
