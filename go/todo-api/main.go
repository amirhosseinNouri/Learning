package main

import (
	taskServer "github.com/amirhosseinnouri/Learning/go/todo-api/internal/task-server"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	router := gin.Default()
	server := taskServer.NewTaskServer()

	router.GET("/task/", server.GetAllTasksHandler)
	router.GET("/task/:id", server.GetTaskHandler)
	router.GET("/task/tag/:tag", server.GetTaskByTagHandler)
	router.GET("/task/due/:year/:month/:day", server.GetTaskByDueDateHandler)

	router.POST("/task/", server.CreateTaskHandler)

	router.DELETE("/task/", server.DeleteAllTasksHandler)
	router.DELETE("/task/:id", server.DeleteTaskHandler)

	//mux.HandleFunc("/task/", func(w http.ResponseWriter, r *http.Request) {
	//
	//	path := strings.TrimSuffix(r.URL.Path, "/")
	//
	//	if path == "/task" {
	//		switch r.Method {
	//		case "POST":
	//			server.CreateTaskHandler(w, r)
	//		case "GET":
	//			server.GetAllTasksHandler(w, r)
	//		case "DELETE":
	//			server.DeleteAllTasksHandler(w, r)
	//		default:
	//			http.Error(w, "Unsupported request method", http.StatusMethodNotAllowed)
	//		}
	//	} else {
	//		switch r.Method {
	//		case "GET":
	//			server.GetTaskHandler(w, r)
	//		case "DELETE":
	//			server.DeleteTaskHandler(w, r)
	//		default:
	//			http.Error(w, "Unsupported request method", http.StatusMethodNotAllowed)
	//		}
	//	}
	//
	//})

	log.Fatal(router.Run(":8080"))
}
