package html

import "github.com/gin-gonic/gin"

func LoadHTML(router *gin.Engine) {
	router.LoadHTMLGlob("internal/**/**/**/*.tmpl")
}
