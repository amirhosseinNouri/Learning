package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"go-blog/pkg/config"
	"os"
)

var rootCmd = &cobra.Command{
	Use:   "help",
	Short: "Help",
	Long:  "Display help command",
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(config.Set)
}
