package config

import (
	"github.com/spf13/viper"
	"log"
)

func Set() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("config") // path to look for the config file in
	if err := viper.ReadInConfig(); err != nil {
		log.Fatal("Error reading configs")
	}

	err := viper.Unmarshal(&configurations)
	if err != nil {
		log.Fatalf("Unable to decode config file into struct, %v", err)
	}

}
