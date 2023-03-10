package main

import (
	"math/rand"
	"time"
)

func generateRandomInt(n int) int {
	// rand.Seed(time.Now().UnixNano())
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	return r.Intn(n)
}
