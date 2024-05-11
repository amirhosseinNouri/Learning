package bootstrap

import (
	"go-blog/pkg/html"
	"go-blog/pkg/routing"
)

func Serve() {
	routing.Init()
	html.LoadHTML(routing.GetRouter())
	routing.RegisterRoutes()
	routing.Serve()
}
