# Cypress-allure-reports-typescript

<form>
<img alt="GitHub issues" src="https://img.shields.io/github/issues/pavelya/Cypress-allure-reports-typescript?style=for-the-badge">
<img alt="GitHub" src="https://img.shields.io/github/license/pavelya/Cypress-allure-reports-typescript?style=for-the-badge">
<img alt="GitHub followers" src="https://img.shields.io/github/followers/pavelya?style=for-the-badge">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/pavelya/Cypress-allure-reports-typescript?style=for-the-badge">
</form>

Automation Testing using Cypress, Typescript and Allure reports

Getting Started
-------------
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
--------------  
[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Getting Started - Installing Git  
[Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) - Installing Cypress

How to install this project
-------------

```bash
git clone https://github.com/Pavelya/Cypress-allure-reports-typescript.git

```
Running the tests - command line mode
-------------------
```bash
cd to project path   

Run locally
npm run cypress:run -- --spec cypress/integration/first.spec.ts --headed --env allure=true
  
Run locally with headless browser   
npm run cypress:run -- --spec cypress/integration/first.spec.ts --env allure=true

```
Parameters usage

| Variable    | Description                    | Example    | Default   |
| ----------  | ------------------------------ | -----------| --------- |
| headed      | Use headless mode              | `true`     | `false`   |
| allure      | Populate Allure results folder | `true`     | `false`   |


Create Allure reports
-------------------
```bash
allure generate --clean
allure open

```

Built With
-------------
* [Cypress](https://www.cypress.io/) - Modern testing with cross-browser compatibility
* [Allure reports](http://allure.qatools.ru/) - Framework designed to create test execution reports

Contributing
-------------
Please read [CONTRIBUTING.md](doc/CONTRIBUTING.md) for details of the process for submitting pull requests.

Authors
-------------
**Pavel Yampolsky**  - Skype: pavel.yampolsky.willhill Email: 2pavelya@gmail.com

License
-------------
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Thanks  
-------------  
Huge kudos to wonderful software that allowed to create this project:
[![Allure](https://avatars3.githubusercontent.com/u/5879127?s=200&v=4)](https://github.com/allure-framework/allure2)  
[![Cypress](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/05330/cypress-logo.png)](https://www.cypress.io/)
