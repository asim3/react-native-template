SHELL=/bin/bash

PROJECT_NAME=my_project_name

CD=cd ./${PROJECT_NAME} &&


main: run

init: 
	./setup/set-new-react-project.bash
	echo 'rm -r ./setup/'


install:
	${CD} npm install


# make test args=my_app
tests:
	${CD} npm test ${args}


copy-to-project:
	cp -r ./setup/project/* ./${PROJECT_NAME}/


update:
	${CD} expo publish


run:
	${CD} expo start --web


delete-all:
	rm -fr ./${PROJECT_NAME}
	sed -i -e "s/${PROJECT_NAME}/my_project_name/g" ./README.md
	sed -i -e "s/${PROJECT_NAME}/my_project_name/g" ./Makefile
