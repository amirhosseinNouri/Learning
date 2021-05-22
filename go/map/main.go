package main

import "fmt"

func main(){
	// colors := map[string]string{
	// 	"red" : "#ff0000",
	// 	"green" : "#343233",
	// }

	// var colors map[string]string
	colors := make(map[string]string)

	colors["white"] = "#fff"

	delete(colors , "white")

	fmt.Println(colors)
}