package main

import "fmt"

type ByteCounter int

func (c *ByteCounter) Write(p []byte) (int, error) {
	*c += ByteCounter(len(p))
	return len(p), nil
}

func (c *ByteCounter) String() string {
	return fmt.Sprintf("I have counted %d bytes", *c)
}

func main() {
	var c ByteCounter
	c.Write([]byte("hello"))
	fmt.Println(c)

	c = 0 // reset
	var name = "Amirhossein"
	fmt.Fprintf(&c, "hello %s", name)
	fmt.Println(c)
	fmt.Println(c.String())
}
