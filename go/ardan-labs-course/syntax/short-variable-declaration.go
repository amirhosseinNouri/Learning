package main

import "fmt"

type user2 struct {
	id   int
	name string
}

type customer struct {
	id   int
	name string
}

func main() {
	u, err := getUser2()

	if err != nil {
		return
	}

	fmt.Println(u)

	c, err := getCustomer(u)

	if err != nil {
		return
	}

	fmt.Println(c)
}

func getUser2() (*user2, error) {
	return &user2{name: "Amirhossein", id: 1}, nil
}

func getCustomer(u *user2) (*customer, error) {
	return &customer{name: "Amirhossein", id: 1}, nil
}
