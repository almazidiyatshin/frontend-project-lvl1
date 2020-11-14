install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

run:
	bin/nodejs-package.js 10
	
install-deps:
	npm ci
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8
