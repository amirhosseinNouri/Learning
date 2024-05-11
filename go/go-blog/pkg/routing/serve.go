package routing

import (
	"fmt"
	"go-blog/pkg/config"
	"log"
)

func Serve() {
	r := GetRouter()
	configs := config.Get()
	err := r.Run(fmt.Sprintf("%v:%v", configs.Server.Host, configs.Server.Port))

	if err != nil {
		log.Fatal("Error in routing")
		return
	}

}
