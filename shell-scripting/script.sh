#!/bin/bash

MY_SHELL="sh"
echo "I am ${MY_SHELL}ing on my keyboard"

if [ "$MY_SHELL" = "bash" ]
then
    echo "It was true"
else
    echo "It was not true"
fi

for COLOR in red green blue
do
    echo "COLOR: $COLOR"
done

CHARACTERS="A B C D"

for CHARACTER in $CHARACTERS
do
    echo "Character: $CHARACTERS"
done