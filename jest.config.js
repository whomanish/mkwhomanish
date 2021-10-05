module.exports = {
	testRegex: '((\\.|/*.)(test))\\.js?$',
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node-modules/', '/dist/', '/template/'],
	coverageDirectory: 'coverage',
	coverageReporters: ['json', 'text-summary', 'clover', 'html', 'lcov'],
	collectCoverageFrom: [
		// 'packages/*/src/**/*.{js,jsx}',
		// '!packages/*/dist/**/*.{js,jsx}',
		// '!packages/*/dist-esm/**/*.{js,jsx}',
		// '!<rootDir>/node_modules/',
		// '!<rootDir>/packages/*/dist/',
		// '!packages/*/src/*.story.jsx',
		// '!packages/*/src/index.js'
	],
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 70,
			functions: 80,
			lines: 80
		}
	}
};