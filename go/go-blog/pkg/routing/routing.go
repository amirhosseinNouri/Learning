package routing

import "github.com/gin-gonic/gin"

func Init() {
	router = gin.Default()
}

func GetRouter() *gin.Engine {
	return router
}
