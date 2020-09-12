#!/usr/bin/env sh


if [ -z "$1" ]; then
    COMMIT_NAME="deploy"
else
    COMMIT_NAME="$1"
fi

# build
npm run build

# Put back git folder
cp -ar dist/ ../production/ 2>/dev/null

echo "Pushing Vue JS to master"
git add .
git commit -m "$COMMIT_NAME"
git push # Should push to master (just to display vue files)

# navigate into the build output directory that is actually getting rendered
cd ../production/dist
cp -ar ../.git.tmp/ .git 2>/dev/null
echo 'danielraymond.me' > CNAME # Added url

echo "Pushing to gh-pages"
git add .
git commit -m "$COMMIT_NAME"
git push # Should push to gh-pages
# git push -f origin HEAD:gh-pages

cp -ar .git/ ../.git.tmp 2>/dev/null

cd -

# TUTORIAL
# https://cli.vuejs.org/guide/deployment.html#github-pages