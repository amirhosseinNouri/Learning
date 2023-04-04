package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	files := []string{"1.txt", "2.txt", "3.txt", "4.txt"}
	err := process(files)

	if err != nil {
		log.Fatal(err)
	}

}

func process(files []string) error {
	for _, fileName := range files {
		f, err := os.Open(fileName)

		if err != nil {
			return err
		}

		defer f.Close()

		fmt.Printf("%s opend successfully.\n", f.Name())
	}

	return nil
}
