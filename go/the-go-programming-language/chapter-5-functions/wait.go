package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	if err := waitForServer(os.Args[1]); err != nil {
		log.Fatalf("Site is down: %v\n", err)
	}
}

func waitForServer(url string) error {

	const timeout = 1 * time.Minute

	deadline := time.Now().Add(timeout)

	for tries := 0; time.Now().Before(deadline); tries++ {
		_, err := http.Head(url)
		if err == nil {
			return nil
		}

		log.Printf("server is not responding (%s); trying...\n", err)
		time.Sleep(time.Second << uint(tries))
	}

	return fmt.Errorf("server failed to responde after %s", timeout)
}
