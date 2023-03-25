package main

import "fmt"

type Point struct {
	X, Y int
}

type Circle struct {
	Point
	Radius int
}

type Wheel struct {
	Circle
	Spokes int
}

func main() {

	var w Wheel
	//w.Circle.X = 8
	//w.Circle.Y = 8
	//w.Circle.Radius = 5
	//w.Spokes = 20
	w.X = 8
	w.Y = 8
	w.Radius = 5
	w.Spokes = 20

	fmt.Printf("%#v\n", w)

	x := Wheel{Spokes: 2,
		Circle: Circle{Radius: 5, Point: Point{X: 8, Y: 8}},
	}

	fmt.Println(x)
}
