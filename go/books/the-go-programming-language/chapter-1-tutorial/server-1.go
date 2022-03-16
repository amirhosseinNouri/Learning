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
	fmt.Fprintf(w, "%s\t%s\t%s\n", r.Method, r.URL.Path, r.Proto)

	for k, v := range r.Header {
		fmt.Fprintf(w, "Header[%q] = %q\n", k, v)
	}

	fmt.Fprintf(w, "Host = %q\n", r.Host)
	fmt.Fprintf(w, "RemoteAddr = %q\n", r.RemoteAddr)

	if err := r.ParseForm(); err != nil {
		log.Print(err)
	}

	for k, v := range r.Form {
		fmt.Fprintf(w, "Form[%q] = %q\n", k, v)
	}

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
