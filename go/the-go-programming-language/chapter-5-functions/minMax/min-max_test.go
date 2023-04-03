package minMax

import (
	"testing"
)

func TestMin(t *testing.T) {
	m := Min([]int{1, 2, 3, 4, 5}...)

	if m != 1 {
		t.Errorf("expected the min to be %d, but go %d\n", 1, m)
	}
}

func TestMax(t *testing.T) {
	m := Max([]int{1, 2, 3, 4, 5}...)

	if m != 5 {
		t.Errorf("expected the max to be %d, but got %d\n", 5, m)
	}
}
