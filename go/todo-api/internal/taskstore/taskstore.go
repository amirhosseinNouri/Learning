package taskstore

import (
	"fmt"
	"sync"
	"time"
)

type Task struct {
	ID   int       `json:"id"`
	Text string    `json:"text"`
	Tags []string  `json:"tags"`
	Due  time.Time `json:"due"`
}

type TaskStore struct {
	sync.Mutex
	tasks  map[int]Task
	nextId int
}

func New() *TaskStore {
	ts := &TaskStore{}
	ts.tasks = make(map[int]Task)
	ts.nextId = 0
	return ts
}

func (ts *TaskStore) CreateTask(text string, tags []string, due time.Time) int {
	ts.Lock()
	defer ts.Unlock()

	task := Task{
		ID:   ts.nextId,
		Text: text,
		Due:  due,
	}

	task.Tags = make([]string, len(tags))
	copy(task.Tags, tags)

	ts.tasks[task.ID] = task
	ts.nextId++
	return task.ID
}
func (ts *TaskStore) GetTask(id int) (Task, error) {
	ts.Lock()
	defer ts.Unlock()

	if t, ok := ts.tasks[id]; ok {
		return t, nil
	}

	return Task{}, fmt.Errorf("task %v not found", id)
}

func (ts *TaskStore) DeleteTask(id int) error {
	ts.Lock()
	defer ts.Unlock()

	if _, ok := ts.tasks[id]; ok {
		delete(ts.tasks, id)
		return nil
	}

	return fmt.Errorf("task %v not found", id)
}

func (ts *TaskStore) DeleteAllTasks() error {
	ts.Lock()
	defer ts.Unlock()

	ts.tasks = make(map[int]Task)

	return nil
}

func (ts *TaskStore) GetAllTasks() []Task {
	ts.Lock()
	defer ts.Unlock()

	tasks := make([]Task, len(ts.tasks))

	for _, t := range ts.tasks {
		tasks = append(tasks, t)
	}

	return tasks
}

func (ts *TaskStore) GetTasksByTag(tag string) []Task {
	ts.Lock()
	defer ts.Unlock()

	var tasks []Task

taskLoop:
	for _, t := range ts.tasks {

		for _, taskTag := range t.Tags {
			if tag == taskTag {
				tasks = append(tasks, t)
				continue taskLoop
			}
		}
	}

	return tasks
}

func (ts *TaskStore) GetTasksByDueDate(year int, month time.Month, day int) []Task {
	ts.Lock()
	defer ts.Unlock()

	var tasks []Task

	for _, t := range ts.tasks {

		y, m, d := t.Due.Date()

		if y == year && m == month && d == day {
			tasks = append(tasks, t)
		}
	}

	return tasks
}
