package config

type Config struct {
	App
	Server
	DB
}

type App struct {
	Name string
}

type Server struct {
	Host string
	Port string
}

type DB struct {
	User     string
	Password string
}
