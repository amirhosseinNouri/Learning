package main

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
	println(b.getGreeting())
}

func (englishBot) getGreeting() string {
	//	Custom logic
	return "Hi there!"
}

func (spanishBot) getGreeting() string {
	//	Custom logic
	return "Hola!"
}
