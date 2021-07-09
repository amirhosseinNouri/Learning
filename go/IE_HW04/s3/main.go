package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
)

type Course struct {
  Name     string     
  Id       int         
  Unit     int         
  Teacher  string  
  TAs      []string  
}



func (c Course) String() string {
  return fmt.Sprintf("%s (%d)\nby %s", c.Name, c.Unit, c.Teacher)
}

func (c Course) print(){
	fmt.Print(c.String())
}

func main() {

	lineNumber := getLineNumber()
	jsonStr := getJson(lineNumber)
	course := createCourse(jsonStr)
	course.print()
	
}

func getLineNumber() int {
	var no int
	fmt.Scanf("%d", &no)
	return no
}

func getJson(lineNumber int) string {
	scanner := bufio.NewScanner(os.Stdin)
	var result string
	for i:= 0; i < lineNumber; i++ {
	  scanner.Scan()
	  result += scanner.Text()
	}
	return result
}

func createCourse(jsonStr string) Course {
	course := Course{}
	json.Unmarshal([]byte(jsonStr), &course)
	return course
}

