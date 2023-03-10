package main

import (
	"math/rand"
	"time"
)

func generateRandomInt(n int) int {
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(n)
}
