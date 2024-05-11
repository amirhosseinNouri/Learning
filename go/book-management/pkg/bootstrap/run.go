package bootstrap

import (
	"fmt"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/config"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/db"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/routes"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func Run() {
	db.Connect()
	r := mux.NewRouter()
	routes.RegisterBookRoute(r)
	http.Handle("/", r)

	c := config.Get()
	log.Fatal(http.ListenAndServe(fmt.Sprintf("%v:%v", c.Host, c.Port), r))

}
