# Item Manager

This project is a simple app done for a selection process test for a job position as a Frontend
developer in Wallapop.

## Storybook

The development was done using storybook. To launch the development environment you will need
to run the following command:

```bash
npm run dev:storybook
```

This should open a browser in `http://localhost:9009` with storybook loaded.

To build the static version of storybook you will need to run the following command:

```bash
npm run build:storybook
```

It will produce a folder with the static files to be deployed called `dist-storybook`

## Tests

The project was developed using TDD, so you can run the tests. There are both visual and unit test.

To run them, just run the following command:

```bash
npm run test
```

This command will first load storybook so the visual tests can run, and then execute jest.

## The app

To run the app for development, just run:

```bash
npm run dev:start
```

This should open a browser in `http://localhost:8080` with the app loaded.

And to build it:

```bash
npm run build:app
```

This command will create a folder with static files to be deployed called `dist`.

## Deploy

The repo also includes a small Dockerfile to ease up the deployment of the app. You can find a 
production version running at `https://wallapop.mati-dev.es`, and an static storybook at 
`https://wallapop.mati-dev.es/storybook`
