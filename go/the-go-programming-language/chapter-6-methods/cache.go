package main

import "sync"

type Cache struct {
	sync.Mutex
	mapping map[string]string
}

var cache = Cache{mapping: make(map[string]string)}

func main() {

}

func Lookup(key string) string {
	cache.Lock()
	v := cache.mapping[key]
	cache.Unlock()
	return v
}
