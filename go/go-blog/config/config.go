package config

type Config struct {
	App    App
	Server Server
}

type App struct {
	Name string
}

type Server struct {
	Host string
	Port string
}