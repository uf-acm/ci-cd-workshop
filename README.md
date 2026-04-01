# ACM CI/CD Workshop

_Jacob Frankel & Sanjeev Kamath | 04/01/2026_

<hr>

## About

This repo is designed to introduce new engineers to modern software delivery practices through a hands-on CI/CD workshop using GitHub Actions.

Workshop participants will run linting and tests in CI, inspect failing pipelines, and then deploy a simple web app to GitHub Pages through CD.

## Features

This repo includes a small JavaScript calculator app in `public/`, unit tests in `tests/`, and a GitHub Actions workflow in `.github/workflows/cicd.yml`.

The workflow is split into two jobs: a CI job that runs lint and tests, and a CD job that deploys the `public/` folder to GitHub Pages after CI passes on pushes to `main`.

## Requirements

- [Node.js](https://nodejs.org/en) version 22
- npm (comes with Node.js)
- A GitHub repository with Actions enabled
- A terminal or command line shell

## Usage

1. Clone this repository and install dependencies:
   1. `npm install`
2. Run the local quality checks:
   1. `npm run lint`
   2. `npm test`
3. Configure GitHub Pages deployment source:
   1. Go to your repo on GitHub
   2. Open `Settings` -> `Pages`
   3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Configure branch protection rules for `main`:
   1. Open `Settings` -> `Rules` -> `Rulesets` -> `New ruleset`
   2. Name it something like `Protect main`
   3. Set **Target branches** to `main`
   4. Enable **Require a pull request before merging** (prevents direct pushes to `main`)
   5. Enable **Require status checks to pass before merging**
   6. In required checks, select the CI workflow checks for this repo
5. Open `public/index.html` in your browser to view the app locally
6. Review `.github/workflows/cicd.yml` and walk through the CI and CD jobs
7. Push to a branch other than `main`
8. Open a pull request to `main`, wait for checks to pass, then merge to trigger CI and GitHub Pages deployment

Now you have a complete CI/CD pipeline demonstration. This is only a starting point, so we encourage you to extend the workflow with your own checks and deployment targets.

## Code Quality Tools

- [What is Code Quality?](https://www.geeksforgeeks.org/software-engineering/software-engineering-software-quality/)
- [SonarQube](https://www.sonarsource.com/products/sonarqube/)

### Linters

- [ESLint (JS and TS)](https://eslint.org/)
- [clang-tidy (C++)](https://clang.llvm.org/extra/clang-tidy/)
- [Pylint (Python)](https://pylint.pycqa.org/)

### Formatters

- [Black formatter (Python)](https://black.readthedocs.io/)
- [Prettier (JS and TS)](https://prettier.io/)
- [clang-format (C++)](https://clang.llvm.org/docs/ClangFormat.html)

## References

- [GitHub Actions documentation](https://docs.github.com/actions)
- [GitHub Pages documentation](https://docs.github.com/pages)
- [Node.js documentation](https://nodejs.org/en/docs)
- [Jest documentation](https://jestjs.io/docs/getting-started)
- [ESLint documentation](https://eslint.org/docs/latest/)
