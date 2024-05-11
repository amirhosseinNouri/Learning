package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/db"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/models"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/utils"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

var NewBook models.Book

func CreateBook(w http.ResponseWriter, r *http.Request) {
	book := &models.Book{}
	utils.ParseBody(r, book)
	b := book.CreateBook()
	res, _ := json.Marshal(b)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetBooks(w http.ResponseWriter, r *http.Request) {
	books := models.GetAllBooks()
	res, _ := json.Marshal(books)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func GetBookById(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	bookId := params["id"]
	id, err := strconv.ParseInt(bookId, 0, 0)

	if err != nil {
		fmt.Println("Error while parsing")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Invalid id"))
	}

	bookDetails, _ := models.GetBookById(id)
	res, _ := json.Marshal(bookDetails)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func UpdateBook(w http.ResponseWriter, r *http.Request) {

	params := mux.Vars(r)
	id, err := strconv.ParseInt(params["id"], 0, 0)
	if err != nil {
		fmt.Println("Error while parsing")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Invalid id"))
	}

	var newBook = &models.Book{}
	utils.ParseBody(r, newBook)

	oldBook, _ := models.GetBookById(id)

	if newBook.Name != "" {
		oldBook.Name = newBook.Name
	}

	if newBook.Author != "" {
		oldBook.Author = newBook.Author
	}

	if newBook.Publication != "" {
		oldBook.Publication = newBook.Publication
	}

	d := db.Get()
	d.Save(&oldBook)
	res, _ := json.Marshal(oldBook)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNoContent)
	w.Write(res)

}

func DeleteBook(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := strconv.ParseInt(params["id"], 0, 0)
	if err != nil {
		fmt.Println("Error while parsing")
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Invalid id"))
	}

	book := models.DeleteBook(id)
	res, _ := json.Marshal(book)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNoContent)
	w.Write(res)

}
