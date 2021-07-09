package main

import "fmt"

func main(){
	colors := map[string]string{
		"red" : "#ff0000",
		"green" : "#343233",
		"white" : "#fff",
	}

	


	// fmt.Println(colors)
	printMap(colors)
}

func printMap(c map[string]string){
	for key, value := range c {
		fmt.Println(key , value)
	}
}