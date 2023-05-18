package main

import (
	"fmt"
	"image/color"
	"math"
)

type Point struct {
	X, Y float64
}

func (p *Point) Distance(q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}

func (p *Point) ScaleBy(factor float64) {
	p.X *= factor
	p.Y *= factor
}

type ColoredPoint struct {
	Point
	Color color.RGBA
}

type AnotherColoredPoint struct {
	*Point
	Color color.RGBA
}

func main() {
	red := color.RGBA{255, 0, 0, 255}
	blue := color.RGBA{0, 0, 255, 255}
	p := ColoredPoint{Point{1, 1}, red}
	q := ColoredPoint{Point{5, 4}, blue}

	fmt.Println(p.Distance(q.Point))
	fmt.Printf("p = %v\n", p)
	fmt.Printf("q = %v\n", q)
	p.ScaleBy(2)
	q.ScaleBy(2)
	fmt.Printf("p = %v\n", p)
	fmt.Printf("q = %v\n", q)

	p2 := AnotherColoredPoint{&Point{1, 2}, red}
	q2 := AnotherColoredPoint{&Point{3, 4}, blue}

	q2.Point = p2.Point
	p2.ScaleBy(2)
	fmt.Println(*p2.Point, *q2.Point)
}
