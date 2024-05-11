package cmd

import (
	"github.com/amirhosseinnouri/Learning/go/book-management/pkg/bootstrap"
	"github.com/spf13/cobra"
)

var runCmd = &cobra.Command{
	Use:   "run",
	Short: "Run command",
	Long:  "Start the dev server",
	Run: func(cmd *cobra.Command, args []string) {
		bootstrap.Run()
	},
}
