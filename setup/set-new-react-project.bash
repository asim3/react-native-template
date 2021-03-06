#!/bin/bash

set -eu

# Fail on a single failed command in a pipeline
set -o pipefail 


echo -n "Project Name: "
read name


start-react-project() {
	expo init ${name} --template blank

	cd ./${name} && expo install \
		@react-navigation/native \
		@react-navigation/native-stack \
		@react-navigation/bottom-tabs \
		react-native-screens \
		react-native-safe-area-context \
		react-native-paper \
		react-native-keyboard-aware-scroll-view \
		react-native-gesture-handler \
		--yarn
		
    cd ..
}


update-project-name() {
	sed -i -e "s/=my_project_name/=${name}/g" ./Makefile
	sed -i -e "s/my_project_name/${name}/g" ./README.md
}


copy-base-project-files() {
	cp -r ./setup/project/* ./${name}/
}


setup-heroku() {
	echo "release: cd ${name} && python3 manage.py migrate" > ./Procfile
	echo "web: gunicorn --chdir ${name} --workers 3 ${name}.wsgi" >> ./Procfile
	echo "python-3.9.6" > ./runtime.txt
}


# commit-and-push() {
# 	code .
# 	git add .
# 	git commit -m "setting up a new React project"
# 	git push origin main 
# }


start-react-project
update-project-name
copy-base-project-files
# setup-heroku
# commit-and-push
