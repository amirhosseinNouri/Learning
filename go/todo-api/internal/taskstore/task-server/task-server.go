package task_server

import "github.com/amirhosseinnouri/Learning/go/todo-api/internal/taskstore"

type TaskServer struct {
	store *taskstore.TaskStore
}

func NewTaskServer() *TaskServer {
	ts := taskstore.New()
	return &TaskServer{ts}
}
