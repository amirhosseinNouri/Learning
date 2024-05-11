package cmd

import (
	"fmt"
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/config"
	"github.com/spf13/cobra"
	"os"
)

var rootCmd = &cobra.Command{
	Use:   "help",
	Short: "Help command",
	Long:  "Display Help command",
}

func init() {
	cobra.OnInitialize(config.Load)
	rootCmd.AddCommand(runCmd)
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
