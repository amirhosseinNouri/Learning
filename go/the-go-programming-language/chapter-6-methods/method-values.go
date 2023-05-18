package main

import (
	"chapter-6-methods/geometry"
	"fmt"
	"time"
)

type Rocket struct {
	Name string
}

func (r Rocket) Launch() {
	fmt.Printf("Rocket %s launched.\n", r.Name)
}

type NewPoint struct {
	X, Y float64
}

func (p NewPoint) Add(q NewPoint) NewPoint {
	return NewPoint{X: p.X + q.X, Y: p.Y + q.Y}
}

func (p NewPoint) Sub(q NewPoint) NewPoint {
	return NewPoint{X: p.X - q.X, Y: p.Y - q.Y}
}

type Path []NewPoint

func (path Path) TranslateBy(offset NewPoint, add bool) {
	var op func(p, q NewPoint) NewPoint

	if add {
		op = NewPoint.Add
	} else {
		op = NewPoint.Sub
	}

	for i := range path {
		path[i] = op(path[i], offset)
	}
}

func main() {
	p := geometry.Point{X: 1, Y: 2}
	q := geometry.Point{X: 4, Y: 6}

	distanceFromP := p.Distance

	fmt.Println(distanceFromP(q))

	var origin geometry.Point

	fmt.Println(distanceFromP(origin))

	scaleP := p.ScaleBy

	fmt.Println(p)
	scaleP(2)
	scaleP(3)
	scaleP(10)
	fmt.Println(p)

	r := Rocket{Name: "Space X"}

	time.AfterFunc(10*time.Second, r.Launch)

	path := Path{{X: 1, Y: 1}, {X: 2, Y: 2}, {X: 3, Y: 3}}
	fmt.Println(path)
	offset := NewPoint{X: 2, Y: 3}
	path.TranslateBy(offset, true)
	fmt.Println(path)
}
