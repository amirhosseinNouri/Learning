package main

import "fmt"

type user struct {
	id   int
	name string
}

type customer struct {
	id   int
	name string
}

func main() {
	u, err := getUser()

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

func getUser() (*user, error) {
	return &user{name: "Amirhossein", id: 1}, nil
}

func getCustomer(u *user) (*customer, error) {
	return &customer{name: "Amirhossein", id: 1}, nil
}
