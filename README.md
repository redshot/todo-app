# Todo App
This a task management app that users can register tasks. Front-end website communicates to an API to add, modify, delete and update the status of tasks

#### Step 1: Clone app from github
The first step to checkout the app is to clone it from the github repository. If you don't have git installed, you can download it here: https://git-scm.com/downloads.

1. Once you have git installed, navigate to any directory like `C:\Users\windowsuser\Documents\nodprojects`
2. Now when you are in the directory, open `git bash terminal` in the current directory
3. Enter `git clone https://github.com/redshot/todo-app` to clone it.

#### Step 2: Start app
You need to install `npm packages` before running the app in your local machine.

1. Navigate to `todo-app` directory then open a `terminal` on the current directory. Enter `npm install` to install npm packages
2. After installing the packages, enter `nodemon server.js` to start the app and server.
3. Go to http://localhost:3000/ on your browser to view the app

## Database Schema Model
The schema is composed of the `title` and `date` fields. This schema is located in `models/Todo.js`

```
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
```
