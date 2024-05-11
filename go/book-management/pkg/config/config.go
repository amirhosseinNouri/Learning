package config

import (
	"fmt"
	"github.com/amirhosseinnouri/Learning/go/book-management/config"
	"github.com/spf13/viper"
)

var configuration config.Config

func Load() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("config")
	err := viper.ReadInConfig()

	if err != nil {
		panic(fmt.Errorf("fatal error config file: %w", err))
	}

	if err := viper.Unmarshal(&configuration); err != nil {
		panic(fmt.Errorf("failed to parse the config file: %w", err))
	}
}

func Get() config.Config {
	return configuration
}
