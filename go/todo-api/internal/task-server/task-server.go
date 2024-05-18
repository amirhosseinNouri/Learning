package task_server

import (
	"encoding/json"
	"github.com/amirhosseinnouri/Learning/go/todo-api/internal/taskstore"
	"log"
	"mime"
	"net/http"
	"strconv"
	"strings"
	"time"
)

type TaskServer struct {
	store *taskstore.TaskStore
}

func NewTaskServer() *TaskServer {
	ts := taskstore.New()
	return &TaskServer{ts}
}

func (ts *TaskServer) CreateTaskHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Handling CreateTask at %s\n", r.URL.Path)

	type RequestTask struct {
		Text string    `json:"text"`
		Tags []string  `json:"tags"`
		Due  time.Time `json:"due"`
	}

	type ResponseId struct {
		Id int `json:"id"`
	}

	contentType := r.Header.Get("Content-Type")
	if mediaType, _, err := mime.ParseMediaType(contentType); err != nil || mediaType != "application/json" {
		http.Error(w, "expected application/json Content-Type", http.StatusUnsupportedMediaType)
	}

	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()

	var rt RequestTask
	if err := dec.Decode(&rt); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	id := ts.store.CreateTask(rt.Text, rt.Tags, rt.Due)

	response, err := json.Marshal(ResponseId{id})

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(response)

}

func (ts *TaskServer) GetAllTasksHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Handling GetAllTasks at %s\n", r.URL.Path)

	tasks := ts.store.GetAllTasks()

	response, err := json.Marshal(tasks)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(response)
}

func (ts *TaskServer) DeleteAllTasksHandler(w http.ResponseWriter, r *http.Request) {}

func (ts *TaskServer) GetTaskHandler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Handling GetTask at %s\n", r.URL.Path)

	parts := strings.Split(r.URL.Path, "/")

	if len(parts) < 3 {
		http.Error(w, "Invalid URL or missing task ID", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(parts[2])

	if err != nil {
		http.Error(w, "Invalid URL or missing task ID", http.StatusBadRequest)
		return
	}

	task, err := ts.store.GetTask(id)

	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	response, err := json.Marshal(task)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(response)

}

func (ts *TaskServer) DeleteTaskHandler(w http.ResponseWriter, r *http.Request) {}

func (ts *TaskServer) GetTaskByTagHandler(w http.ResponseWriter, r *http.Request) {}

func (ts *TaskServer) GetTaskByDueDateHandler(w http.ResponseWriter, r *http.Request) {}
