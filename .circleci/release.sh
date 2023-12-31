#!/bin/sh

git clone https://github.com/FarrahZakir/thesis.git
cd thesis
echo "cloned and got into thesis"

git checkout main
echo "checked out main"

git merge develop
echo "develop branch merged into main"

git commit -m "commit develop to master"
echo "develop branch committed to main"

git push
echo "pushed to main"
