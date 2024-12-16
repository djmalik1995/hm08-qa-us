# Urban Routes Automation Tests

## Description

This project contains automated end-to-end tests for the Urban Routes web application. The tests verify the functionality of critical features, including taxi booking, credit card management, and additional services. The goal is to ensure a seamless user experience and reliability of the app's core workflows.

## Technologies and Techniques Used

- **JavaScript**: Programming language used for writing the test scripts.
- **WebdriverIO**: Framework for writing Selenium-based end-to-end tests.
- **Node.js**: Runtime environment for executing the scripts.
- **WDIO Interception**: Used for intercepting API calls and validating backend responses during tests.

## Project Structure

. ├── page.js # Page Object Model with reusable selectors and functions ├── test/ │ ├── specs/ │ │ ├── createAnOrder.e2e.js # Automated tests for the Urban Routes app ├── wdio.conf.js # WebdriverIO configuration file ├── package.json # Project dependencies and scripts ├── README.md # Documentation for the project

markdown
Copy code

## Instructions to Run the Tests

### Prerequisites

1. **Node.js**: Ensure you have Node.js (v16 or higher) installed on your machine.
2. **Package Manager**: Use `npm`  for managing dependencies.

### Setup Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
Install dependencies:

bash
Copy code
npm install
Ensure the WebdriverIO configuration is set up correctly in wdio.conf.js. Update any URLs or capabilities if necessary.

Running the Tests
Execute the tests using the following command:

bash
Copy code
npm run wdio
To run specific tests, provide the path to the test file:

bash
Copy code
npm run wdio --spec test/specs/createAnOrder.e2e.js
View the results in the terminal. Logs and screenshots (if configured) will be saved in the ./results folder.

Troubleshooting
Test Failures: If a test fails, review the error messages in the terminal output or check the logs for details.
Selectors Not Found: Ensure the application’s DOM structure hasn’t changed and the selectors in page.js are accurate.