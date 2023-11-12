# Chatty Front-end

Technology stack:
Vite/SCSS/React/TypeScript

## Clone the repo
Go to your project destination and type:
```bash
git clone https://github.com/rozwijacze/chatty-web.git
```

## How to run
Install necessary dependencies
```bash
npm install
```
Run the script which starts the app
```bash
npm start
```
App will start on
```bash
http://localhost:3000/
```

## Docker
Go to top folder of the project and build the docker image
```bash
docker build . -t chatty-web
```
Run the container
```bash
docker run --rm -p 3000:3000 --name chatty-web chatty-web
```
omit `--rm` if you don't want container to be removed after stopping it

Container will start on
```bash
http://localhost:3000/
```
