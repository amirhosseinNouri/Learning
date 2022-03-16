package main

import (
	"fmt"
	"log"
	"net/http"
	"sync"
)

var lock sync.Mutex
var count int

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/count", counter)
	log.Println(http.ListenAndServe("localhost:8080", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	lock.Lock()
	count++
	lock.Unlock()
	fmt.Fprintf(w, "URL.Path= %q\n", r.URL.Path)
}

func counter(w http.ResponseWriter, r *http.Request) {
	lock.Lock()
	fmt.Fprintf(w, "Count %d\n", count)
	lock.Unlock()
}
