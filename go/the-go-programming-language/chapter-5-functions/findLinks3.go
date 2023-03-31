package main

import (
	"chapter-5-functions/links"
	"fmt"
	"log"
	"os"
)

func main() {
	breadFirst(crawl, os.Args[1:])
}

func breadFirst(f func(item string) []string, workList []string) {
	seen := make(map[string]bool)

	for len(workList) > 0 {
		items := workList
		workList = nil
		for _, item := range items {
			if !seen[item] {
				seen[item] = true
				workList = append(workList, f(item)...)
			}
		}
	}
}

func crawl(url string) []string {
	fmt.Println(url)

	list, err := links.Extract(url)

	if err != nil {
		log.Print(err)
	}

	return list
}
