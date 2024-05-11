package routing

import (
	"fmt"
	"go-blog/pkg/config"
	"log"
)

func Serve() {
	configs := config.Get()
	err := router.Run(fmt.Sprintf("%v:%v", configs.Server.Host, configs.Server.Port))

	if err != nil {
		log.Fatal("Error in routing")
		return
	}

}
