.DEFAULT_GOAL := build

fmt:
	go imports -l -w .
.PHONY:fmt

lint: fmt
	golint .
.PHONY:lint

build:
	go build main.go
.PHONY:build

