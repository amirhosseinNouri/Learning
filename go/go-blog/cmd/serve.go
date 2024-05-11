package cmd

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"go-blog/pkg/config"
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
	configs := config.Get()

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message":    "pong",
			"x-app-name": viper.Get("App.Name"),
		})
	})
	r.Run(fmt.Sprintf("%v:%v", configs.Server.Host, configs.Server.Port))
}
