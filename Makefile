BRANCH = main
COMMIT_MESSAGE= "REFACTORING Code Changes [DONE]"
deploy:
	git add .
	git commit -m "${COMMIT_MESSAGE}" 
	git push -u origin ${BRANCH}