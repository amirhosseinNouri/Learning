#!/bin/bash

for FILE in *.html
do
    echo "Copying ${FILE}"
    cp $FILE htmls
done