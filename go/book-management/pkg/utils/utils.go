package utils

import (
	"encoding/json"
	"io"
	"net/http"
)

func ParseBody(r *http.Request, X interface{}) {

	if b, err := io.ReadAll(r.Body); err == nil {
		if err := json.Unmarshal(b, X); err == nil {
			return
		}
	}
}
