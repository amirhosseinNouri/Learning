package db

import (
	"fmt"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/config"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB

func Connect() *gorm.DB {
	c := config.Get()
	d, err := gorm.Open("mysql", fmt.Sprintf("%v:%v/book-management?charset=utf8&parseTime=True&loc=Local", c.DB.User, c.DB.Password))

	if err != nil {
		panic(fmt.Errorf("db connection failed: %w", err))
	}

	db = d

	return d
}

func Get() *gorm.DB {
	return db
}
