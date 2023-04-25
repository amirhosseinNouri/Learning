package geometry

import (
	"math"
)

type Point struct {
	X, Y float64
}

type Path []Point

func Distance(p, q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}

func (p Point) Distance(q Point) float64 {
	return math.Hypot(q.X-p.X, q.Y-p.Y)
}

func (path Path) Distance() float64 {
	sum := 0.0

	for i := range path {
		if i > 0 {
			sum += path[i-1].Distance(path[i])
		}
	}

	return sum
}

func (p *Point) ScaleBy(factor float64) {
	p.X *= factor
	p.Y *= factor
}
