package main

import (
	"io"
	"time"
)

type Artifact interface {
	Title() string
	Creators() []string
	Created() time.Time
}

type Text interface {
	Artifact
	Pages() int
	Words() int
	PageSize() int
}

type Streamer interface {
	Stream() (io.ReadCloser, error)
	RunningTime() time.Duration
	Format() string
}

type Audio interface {
	Artifact
	Streamer
}

type Video interface {
	Artifact
	Streamer
	Resolution() (x, y int)
}

func main() {

}
