package user

import "gopkg.in/mgo.v2/bson"

// User holds data for a single user
type User struct {
	ID   bson.ObjectId `json:"id" storm:"id"`
	Name string        `json:"name"`
	Role string        `json:"role"`
}
