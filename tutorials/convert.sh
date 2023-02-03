#!/bin/bash
for filename in ./*.ipynb; do
jupyter nbconvert "$filename" --to markdown --execute --output "$(basename "$filename" .ipynb).md"
# cp "$(basename "$filename" .ipynb).md" ../docs/
cp -r . ../docs/
done
