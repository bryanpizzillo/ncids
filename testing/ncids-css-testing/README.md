# `ncids-css-testing`

> This package contains integration tests so that we can properly check the partials exported from ncids-css.

## Usage
1. Run `yarn start` to run Storybook locally

## Tests
1. Install [Docker Desktop](https://hub.docker.com/search?type=edition&offering=community&architecture=amd64)
2. Ensure Docker Desktop is running
3. Open a command prompt
4. cd into the `testing/ncids-css-testing` folder
5. Run `yarn start` to start the Storybook server
6. Run `yarn backstop:test` to run tests locally with Storybook started
7. Run `yarn backstop:openReport` to open last test report.
8. Stop the Storybook server when finished.

## Create new tests
1. Every test must have an associated Story in [`testing/ncids-css/testing/stories/`](./testing/ncids-css/testing/stories/)
2. For each component, create a new directory using the BEM block name, following rules from [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way)
3. For each variant, create a new `<variant>.stories.jsx` and optionally `<variant>.scss` files
4. Create a primary story file with its BEM block name containing
   * Default export, defining any custom metadata
   * Exports for all variant stories
   * See an [example](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-support-for-duplicate-kinds) of the primary story file for more information
5. Create a new scenario file, or add to an existing one, in `stories/components/<your-component>/<your-component>.scenarios.js`
   * In each scenario add the following:
	   * `storyId` - the storybook Id. This will be used to build the URL
     * `label` - Label scenario with `<component> <variant> <interaction>`
		 * any additional backstopjs options for a test (e.g. selectors)
6. Run `yarn backstop:test` to test the new scenarios
7. Run `yarn backstop:reference` with Storybook started to create reference files for new scenarios

## Update tests
1. Open a command prompt
2. cd into the `testing/ncids-css-testing` folder
3. Run `yarn start` to start the Storybook server
4. To update existing files, you must run `yarn backstop:approve` with Storybook started
5. Review the list of files generated to ensure that it **ONLY** has modified those you expected.
6. Run `yarn backstop:test` to ensure that the all tests pass.
7. Stop your Storybook server and commit your changes

## WSL
1. For WSL, preface all `yarn backstop:` commands with `CI=true`
    - e.g. `CI=true yarn backstop:reference`

## User Interaction Scripts
BackstopJS ships with scripts that enables several user interaction selectors. These files are located at [`testing/ncids-css-testing/.backstop/engine-scripts/puppet/`](./testing/ncids-css-testing/.backstop/engine-scripts/puppet). Some of the user actions include:

1. [Click and hover](https://github.com/garris/BackstopJS#testing-click-and-hover-interactions)
2. [Key press](https://github.com/garris/BackstopJS#key-press-interactions)
3. [Setting cookies](https://github.com/garris/BackstopJS#setting-cookies)

See [Custom scripts](https://github.com/garris/BackstopJS#running-custom-scripts) to simulate other user actions.

## CI
1. GitHub Actions will automatically run `yarn test:css` for each push and pull request
2. Failed jobs will be uploaded as an artifact for review
   1. Download artifact
   2. Open html-report/index.html
3. Successful jobs will upload the test's `report.json` file

## PRs
1. Be sure to link relevant links in PR for designer approval until this process is automated.

## See also
* [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way)
* [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
* [BackstopJS](https://github.com/garris/BackstopJS)
* [BackstopJS Docker instructions](https://github.com/garris/BackstopJS#using-docker-for-testing-across-different-environments)
* [`start-server-and-test`](https://github.com/bahmutov/start-server-and-test)

