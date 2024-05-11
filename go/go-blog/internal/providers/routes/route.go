package routes

import (
	"github.com/gin-gonic/gin"
	homeRoute "go-blog/internal/modules/home/routes"
)

func RegisterRoutes(router *gin.Engine) {
	homeRoute.Routes(router)
}
