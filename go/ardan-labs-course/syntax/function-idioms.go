package main

import (
	"encoding/json"
	"fmt"
)

type user struct {
	ID   int
	Name string
}

func main() {
	u, err := retreiveUser("Amirhossein")

	if err != nil {
		panic(err)
	}

	fmt.Printf("%+v\n", u)
}

func retreiveUser(name string) (*user, error) {
	r, err := getUser(name)

	if err != nil {
		return nil, err
	}

	var u user
	if err := json.Unmarshal([]byte(r), &u); err != nil {
		return nil, err

	}

	return &u, nil
}

func getUser(name string) (string, error) {
	response := `{"id": 123, "name": "Amirhossein"}`
	return response, nil
}
