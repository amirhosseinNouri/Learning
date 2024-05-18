package main

import (
	taskServer "github.com/amirhosseinnouri/Learning/go/todo-api/internal/task-server"
	"log"
	"net/http"
	"strings"
)

func main() {
	mux := http.NewServeMux()
	server := taskServer.NewTaskServer()

	mux.HandleFunc("/task/", func(w http.ResponseWriter, r *http.Request) {

		path := strings.TrimSuffix(r.URL.Path, "/")

		if path == "/task" {
			switch r.Method {
			case "POST":
				server.CreateTaskHandler(w, r)
			case "GET":
				server.GetAllTasksHandler(w, r)
			case "DELETE":
				server.DeleteAllTasksHandler(w, r)
			default:
				http.Error(w, "Unsupported request method", http.StatusMethodNotAllowed)
			}
		} else {
			switch r.Method {
			case "GET":
				server.GetTaskHandler(w, r)
			case "DELETE":
				server.DeleteTaskHandler(w, r)
			default:
				http.Error(w, "Unsupported request method", http.StatusMethodNotAllowed)
			}
		}

	})

	log.Fatal(http.ListenAndServe(":8080", mux))
}
