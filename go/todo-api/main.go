package main

import (
	taskServer "github.com/amirhosseinnouri/Learning/go/todo-api/internal/task-server"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	server := taskServer.NewTaskServer()

	//mux.HandleFunc("POST /task/", server.CreateTaskHandler)
	//mux.HandleFunc("GET /task/", server.GetAllTasksHandler)
	//mux.HandleFunc("DELETE /task/", server.DeleteAllTasksHandler)
	//mux.HandleFunc("GET /task/{id}/", server.GetTaskHandler)
	//mux.HandleFunc("DELETE /task/{id}/", server.DeleteTaskHandler)
	//mux.HandleFunc("GET /task/{tag}/", server.GetTaskByTagHandler)
	//mux.HandleFunc("GET /task/{year}/{month}/{day}/", server.GetTaskByDueDateHandler)

	mux.HandleFunc("/task/", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "POST":
			server.CreateTaskHandler(w, r)
		case "GET":
			server.GetAllTasksHandler(w, r)
		}
	})

	log.Fatal(http.ListenAndServe(":8080", mux))
}
