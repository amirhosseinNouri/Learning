#!/bin/bash

MY_SHELL="sh"
echo "I am ${MY_SHELL}ing on my keyboard"

if [ "$MY_SHELL" = "bash" ]
then
    echo "It was true"
else
    echo "It was not true"
fi