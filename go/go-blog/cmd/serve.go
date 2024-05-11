package cmd

import (
	"github.com/spf13/cobra"
	"go-blog/pkg/bootstrap"
)

var serverCmd = &cobra.Command{
	Use:   "serve",
	Short: "Server app on dev server",
	Long:  "Application will be served on host and port defined in config.yml",
	Run: func(cmd *cobra.Command, args []string) {
		bootstrap.Serve()
	},
}
