package main

import "fmt"

type bot interface {
	getGreeting() string
}
type englishBot struct{}
type spanishBot struct{}

func main() {

	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)

}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting())
}

func (englishBot) getGreeting() string {
	// Custom logic for generating an English greeting
	return "Hi There!"
}

func (spanishBot) getGreeting() string {
	// Custom logic for greeting a Spanish greeting
	return "Hola!"
}
