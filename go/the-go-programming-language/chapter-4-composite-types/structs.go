package main

import (
	"fmt"
	"time"
)

type Employee struct {
	ID            int
	Name, Address string
	DoB           time.Time
	Position      string
	Salary        int
	ManagerID     int
}

var albert = Employee{
	ID:        1,
	Name:      "Albert",
	Address:   "Lorem",
	DoB:       time.Now(),
	Position:  "Software engineer",
	Salary:    100,
	ManagerID: 2,
}
var dan = Employee{
	ID:        4,
	Name:      "Dan",
	Address:   "Lorem",
	DoB:       time.Now(),
	Position:  "Designer",
	Salary:    200,
	ManagerID: 3,
}

var employees = []Employee{dan, albert}

func main() {

	//
	//position := &albert.Position
	//*position = "Senior " + *position
	//
	//fmt.Println(albert.Position)
	//
	//employeeOfTheMonth := &albert
	//employeeOfTheMonth.Position = "Proactive team player"
	//
	//fmt.Println(*employeeOfTheMonth)
	//fmt.Println(albert)

	fmt.Println(albert)

	if e, ok := getEmployeeByID(1); ok {
		e.Salary = 500
	}

	fmt.Println(albert)

}

func getEmployeeByID(id int) (*Employee, bool) {
	for _, e := range employees {
		if e.ID == id {
			return &e, true
		}
	}

	return nil, false
}
