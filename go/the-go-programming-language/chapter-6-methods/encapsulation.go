package main

import "fmt"

type Counter struct {
	n int
}

func (c *Counter) N() int     { return c.n }
func (c *Counter) Increment() { c.n++ }
func (c *Counter) Reset()     { c.n = 0 }

func main() {
	var c Counter

	fmt.Println(c.N())
	c.Increment()
	c.Increment()
	c.Increment()
	c.Increment()
	fmt.Println(c.N())
	c.Reset()
	fmt.Println(c.N())
}
