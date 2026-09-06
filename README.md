# Tax Calculator

A simple Angular app that calculates tax amount and net income from a given
annual income and tax rate. Built as part of the IBM DevOps Capstone final
project.

## Local development

```bash
npm install
npm start        # serves on http://localhost:4200
```

## Run unit tests

```bash
npm test
```

## Build

```bash
npm run build
```

## Docker

```bash
docker build -t tax-calculator:v1 .
docker run -d -p 8080:80 --name tax-calculator-container tax-calculator:v1
```

## Project structure

- `src/app/tax-calculator` – core calculator component (logic + template + tests)
- `Dockerfile` – multi-stage build, served via nginx
- `tasks.yaml` – Tekton tasks: `npm-install`, `run-jasmine-tests`
- `build-docker-image-task.yaml` – Tekton task to build/push the image
- `deploy-task.yaml` – Tekton task to deploy to IBM Code Engine
- `pipeline.yaml` – Tekton pipeline chaining all of the above
