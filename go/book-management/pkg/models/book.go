package models

import (
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/db"
	"github.com/jinzhu/gorm"
)

type Book struct {
	gorm.Model
	Name        string `gorm:"" json:"name"`
	Author      string `json:"author"`
	Publication string `json:"publication"`
}

var d *gorm.DB

func init() {
	db.Connect()
	d := db.Get()
	d.AutoMigrate(&Book{})
}

func (b *Book) CreateBook() *Book {
	d.NewRecord(b)
	d.Create(&b)
	return b
}

func GetAllBooks() []Book {
	var books []Book
	d.Find(&books)
	return books
}

func GetBookById(id int64) (*Book, *gorm.DB) {
	var book Book
	d.Where("ID=?", id).Find(&book)
	return &book, d
}

func DeleteBook(id int64) Book {
	var book Book
	d.Where("ID=?", id).Delete(book)
	return book
}
