package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

const (
	APIURL = "http://www.omdbapi.com"
	ApiKey = "afb7bb8"
)

type SearchResponse struct {
	Title    string
	Year     string
	Poster   string
	Response string
	Error    string
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

	if err := DownloadPoster(resp.Title, resp.Poster); err != nil {
		log.Fatalf("Failed to download the poster: %s", err)
	}

	fmt.Println("Done.")
}

func SearchMovie(name string) (*SearchResponse, error) {

	fmt.Println("Searching the movies...")

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

	if result.Response == "False" {
		_ = resp.Body.Close()
		return nil, fmt.Errorf(result.Error)
	}

	fmt.Println("Found the movie!")

	_ = resp.Body.Close()
	return &result, nil

}

func DownloadPoster(title, poster string) error {

	fmt.Println("Downloading the poster...")

	resp, err := http.Get(poster)

	if err != nil {
		return err
	}

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("failed to download the image. status code: %d", resp.StatusCode)
	}
	e := ExtractExtension(poster)

	file, err := os.Create(title + e)

	if err != nil {
		return err
	}

	if _, err = io.Copy(file, resp.Body); err != nil {
		return err
	}

	return nil

}

func ExtractExtension(u string) string {
	dotIndex := strings.LastIndex(u, ".")
	return u[dotIndex:]
}
