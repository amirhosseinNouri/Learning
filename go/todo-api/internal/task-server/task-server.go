package task_server

import (
	"fmt"
	"github.com/amirhosseinnouri/Learning/go/todo-api/internal/taskstore"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
	"time"
)

type TaskServer struct {
	store *taskstore.TaskStore
}

func NewTaskServer() *TaskServer {
	ts := taskstore.New()
	return &TaskServer{ts}
}

// CreateTaskHandler
// @Summary Create a new task
// @Description Create a new task
// @Accept json
// @Produce json
// @Param task body task_server.CreateTaskHandler.RequestTask true "task"
// @success 200 {object} struct{id string}
// @Failure 400 {string} error
// @Router /task/ [post]
func (ts *TaskServer) CreateTaskHandler(c *gin.Context) {
	type RequestTask struct {
		Text string    `json:"text"`
		Tags []string  `json:"tags"`
		Due  time.Time `json:"due"`
	}

	var rt RequestTask
	if err := c.ShouldBindJSON(&rt); err != nil {
		c.String(http.StatusBadRequest, err.Error())
		return
	}

	id := ts.store.CreateTask(rt.Text, rt.Tags, rt.Due)
	c.JSON(http.StatusOK, gin.H{"id": id})
}

func (ts *TaskServer) GetAllTasksHandler(c *gin.Context) {
	tasks := ts.store.GetAllTasks()
	c.JSON(http.StatusOK, tasks)
}

func (ts *TaskServer) DeleteAllTasksHandler(c *gin.Context) {
	err := ts.store.DeleteAllTasks()

	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	c.Writer.WriteHeader(http.StatusNoContent)
}

func (ts *TaskServer) GetTaskHandler(c *gin.Context) {
	id, err := strconv.Atoi(c.Params.ByName("id"))

	if err != nil {
		c.String(http.StatusBadRequest, err.Error())
		return
	}

	task, err := ts.store.GetTask(id)

	if err != nil {
		c.String(http.StatusNotFound, err.Error())
		return
	}

	c.JSON(http.StatusOK, task)
}

func (ts *TaskServer) DeleteTaskHandler(c *gin.Context) {
	id, err := strconv.Atoi(c.Params.ByName("id"))

	if err != nil {
		c.String(http.StatusBadRequest, err.Error())
		return
	}

	err = ts.store.DeleteTask(id)

	if err != nil {
		c.String(http.StatusNotFound, err.Error())
		return
	}
	c.Writer.WriteHeader(http.StatusNoContent)
}

func (ts *TaskServer) GetTaskByTagHandler(c *gin.Context) {
	tag, ok := c.Params.Get("tag")

	if !ok {
		c.String(http.StatusBadRequest, fmt.Sprintf("invalid tag: %s", tag))
		return
	}

	tasks := ts.store.GetTasksByTag(tag)
	c.JSON(http.StatusOK, tasks)
}

func (ts *TaskServer) GetTaskByDueDateHandler(c *gin.Context) {
	badRequestError := func() {
		c.String(http.StatusBadRequest, "expected /task/due/<year>/<month>/<day>, but got %v", c.FullPath())
	}

	year, err := strconv.Atoi(c.Params.ByName("year"))
	if err != nil {
		badRequestError()
		return
	}

	month, err := strconv.Atoi(c.Params.ByName("month"))
	if err != nil {
		badRequestError()
		return
	}

	day, err := strconv.Atoi(c.Params.ByName("day"))
	if err != nil {
		badRequestError()
		return
	}

	tasks := ts.store.GetTasksByDueDate(year, time.Month(month), day)
	c.JSON(http.StatusOK, tasks)
}
