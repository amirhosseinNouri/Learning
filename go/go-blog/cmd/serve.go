package cmd

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"go-blog/pkg/routing"
	"net/http"
)

var serverCmd = &cobra.Command{
	Use:   "serve",
	Short: "Server app on dev server",
	Long:  "Application will be served on host and port defined in config.yml",
	Run: func(cmd *cobra.Command, args []string) {
		serve()
	},
}

func serve() {
	routing.Init()

	router := routing.GetRouter()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message":    "pong",
			"x-app-name": viper.Get("App.Name"),
		})
	})
	routing.Serve()
}
