package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type Movie struct {
	Title  string
	Year   int  `json:"released"`
	Color  bool `json:"color,omitempty"`
	Actors []string
}

var movies = []Movie{
	{Title: "Casablanca", Year: 1942, Color: false, Actors: []string{"A", "B"}},
	{Title: "Cool hand Like", Year: 1967, Color: true, Actors: []string{"C", "D"}},
	{Title: "Bullitt", Year: 1968, Color: true, Actors: []string{"E", "F"}},
}

func main() {
	data, err := json.Marshal(movies)

	if err != nil {
		log.Fatalf("Json marshing failed: %s", err)
	}

	fmt.Printf("%s\n", data)
}
