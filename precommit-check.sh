#!/bin/sh

files=$(git diff --cached --name-only --diff-filter=ACM | grep ".js$")
if [ "$files" == "" ]; then
    exit 0
fi

flow=$(yarn flow) # Change this to your flow script in package.json
eslint=$PWD/node_modules/.bin/eslint

flowfiles=""
flowerrors="false"
lintfiles=""
linterrors="false"

for file in ${files}; do
    if [[ "$flow" == *"$file"* ]]; then
        flowfiles+="\n$file"
        flowerrors="true"
    fi
done

for file in ${files}; do
    lint=$($eslint -c .eslintrc ${file})
    if [[ "$lint" == *"problem"* ]]; then
        lintfiles+="\n$file"
        linterrors="true"
    fi
done

if [ "$flowerrors" == "true" ]; then
    echo "$flow"
    echo "\n\033[41m COMMIT FAILED: \033[0m Your commit contains flow errors in: $flowfiles"
fi

if [ "$linterrors" == "true" ]; then
    $eslint -c .eslintrc ${files}
    echo "\n\033[41m COMMIT FAILED: \033[0m Your commit contains lint errors and/or warnings in: $lintfiles"
fi

if [ "$flowerrors" == "true" ] || [ "$linterrors" == "true" ] ; then
    exit 1
fi