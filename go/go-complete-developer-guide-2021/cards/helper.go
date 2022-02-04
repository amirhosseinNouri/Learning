package main

import (
	"math/rand"
	"time"
)

func generateRandomNumber(randomRange int) int {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	return r.Intn(randomRange)
}
