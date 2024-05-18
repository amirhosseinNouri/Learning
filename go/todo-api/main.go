package main

import (
	"github.com/amirhosseinnouri/Learning/go/todo-api/docs"
	taskServer "github.com/amirhosseinnouri/Learning/go/todo-api/internal/task-server"
	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"log"
)

func main() {
	router := gin.Default()
	docs.SwaggerInfo.BasePath = "/"
	server := taskServer.NewTaskServer()

	router.GET("/task/", server.GetAllTasksHandler)
	router.GET("/task/:id", server.GetTaskHandler)
	router.GET("/task/tag/:tag", server.GetTaskByTagHandler)
	router.GET("/task/due/:year/:month/:day", server.GetTaskByDueDateHandler)

	router.POST("/task/", server.CreateTaskHandler)

	router.DELETE("/task/", server.DeleteAllTasksHandler)
	router.DELETE("/task/:id", server.DeleteTaskHandler)

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	log.Fatal(router.Run(":8080"))
}
