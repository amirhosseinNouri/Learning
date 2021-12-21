#!/bin/bash

# read -p "PROMPT: " VARIABLE
# echo $VARIABLE

echo "Adding env to .env file"
read -p "Variable: " VARIABLE
read -p "Value: " VALUE

echo "${VARIABLE}=${VALUE}" >> .env 