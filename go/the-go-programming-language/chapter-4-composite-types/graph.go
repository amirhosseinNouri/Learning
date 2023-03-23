package main

import "fmt"

var graph = make(map[string]map[string]bool)

func main() {

	addEdge("A", "B")
	addEdge("A", "C")

	fmt.Println(hasEdge("A", "B") == true)
	fmt.Println(hasEdge("A", "C") == true)
	fmt.Println(hasEdge("A", "D") == false)
}

func addEdge(from, to string) {
	edges := graph[from]
	if edges == nil {
		edges = make(map[string]bool)
		graph[from] = edges
	}

	edges[to] = true
}

func hasEdge(from, to string) bool {
	return graph[from][to]
}
