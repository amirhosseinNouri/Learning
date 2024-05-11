package config

type Config struct {
	App
	Server
}

type App struct {
	Name string
}

type Server struct {
	Host string
	Port string
}
