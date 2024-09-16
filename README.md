# cypress-express-mark

# Initialize Mark L API
 * To start the application used in the tests download the project, in terminal access **Cypress > apps > api** and run:

 ```bash
    npm install
 ```

 ```bash
    npm run dev
 ```

# Initialize Mark L web
 * To start the application used in the tests download the project, in terminal access **Cypress > apps > web** and run:

 ```bash
    npm install
 ```

 ```bash
    npm run db:init
 ```

 ```bash
    npm run dev
 ```

 After this commands your Mark L application shoul be online.

# Running the tests
 After download the project and run the Mark application:

 ```bash
    npm install
 ```

 ```bash
    yarn install
 ```

To run the tests headless and generate a report.
 ```bash
    yarn cypress run allure=true
 ```

To open the Cypress visual interface and run the tests.
 ```bash
    yarn cypress open
 ```