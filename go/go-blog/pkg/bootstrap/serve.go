package bootstrap

import (
	"go-blog/pkg/routing"
)

func Serve() {
	routing.Init()
	routing.RegisterRoutes()
	routing.Serve()
}
