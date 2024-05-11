package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"go-blog/config"
	"net/http"
)

func main() {

	configs := setConfig()

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message":    "pong",
			"x-app-name": viper.Get("App.Name"),
		})
	})
	r.Run(fmt.Sprintf("%v:%v", configs.Server.Host, configs.Server.Port))
}

func setConfig() config.Config {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("config") // path to look for the config file in
	if err := viper.ReadInConfig(); err != nil {
		fmt.Println("Error reading configs")
	}

	var configs config.Config
	err := viper.Unmarshal(&configs)
	if err != nil {
		fmt.Printf("Unable to decode config file into struct, %v", err)
	}

	return configs
}
