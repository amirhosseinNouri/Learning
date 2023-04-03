package stringJoin

import (
	"testing"
)

func TestJoin(t *testing.T) {
	r := Join(",", "A", "B", "C", "D")
	expected := "A,B,C,D"
	if r != expected {
		t.Errorf("expected the joined string to be %s, but got %s", expected, r)
	}
}

func TestJoinWithEmptyString(t *testing.T) {
	r := Join(",")
	expected := ""
	if r != expected {
		t.Errorf("expected the joined string to be %s, but got %s", expected, r)
	}
}

func TestJoinWithEmptySeparator(t *testing.T) {
	r := Join("", "A", "B", "C", "D")
	expected := "ABCD"
	if r != expected {
		t.Errorf("expected the joined string to be %s, but got %s", expected, r)
	}
}
