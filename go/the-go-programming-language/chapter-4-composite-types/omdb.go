package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
)

const APIURL = "http://www.omdbapi.com"
const ApiKey = "afb7bb8"

//http://www.omdbapi.com/?apikey=[yourkey]&

type SearchResponse struct {
	Title    string
	Year     string
	Poster   string
	Response string
}

var name = flag.String("name", "", "The movie name")

func main() {

	flag.Parse()

	if *name == "" {
		log.Fatalf("The movie name can not be empty.")
	}

	resp, err := SearchMovie(*name)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(resp)

}

func SearchMovie(name string) (*SearchResponse, error) {

	params := map[string]string{
		"apikey": ApiKey,
		"t":      name,
	}

	var q string

	for p, v := range params {
		q += p + "=" + v + "&"
	}

	u := APIURL + "?" + q

	resp, err := http.Get(u)

	if err != nil {
		return nil, err
	}

	if resp.StatusCode != http.StatusOK {
		_ = resp.Body.Close()
		return nil, fmt.Errorf("request failed with %d status code", resp.StatusCode)
	}

	var result SearchResponse

	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		_ = resp.Body.Close()
		return nil, err
	}

	_ = resp.Body.Close()
	return &result, nil

}
