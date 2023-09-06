![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# TASK TRACKER  APP

## Overview 🟢 
 </br>
 Task Tracker App offers user management capabilities, enabling the creation and administration of multiple users with individual secure login credentials. Robust authentication and authorization mechanisms ensure data protection, while its core task management functionalities allow users to effortlessly create, update, and delete tasks, with the flexibility to specify attributes such as title, description, priority (ranging from "Low" to "High"), and status (including options like "To Do," "In Progress," and "Completed"). Dive into a seamless user experience, where authentication safeguards access for authorized individuals, enabling task creation, priority and status adjustments, and progress tracking. Task Tracker App is your gateway to enhanced productivity and task management efficiency.


![Screen Shot 2023-09-06 at 6 04 23 AM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/a4795122-31a8-4159-b87c-8bce3b9ce1d1)


![Screen Shot 2023-09-06 at 6 03 43 AM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/9a862688-ad0e-4226-850c-63a75fdd032d)


![Screen Shot 2023-09-06 at 6 02 57 AM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/2b55ca69-9bde-4b9a-b82f-6449278e934a)


## To set up this app locally, please follow these steps: 🟢

- Clone this repository using `git clone`. 
- Navigate to the root directory by running `cd Virtual_OpenAI_Chatbot `.
- In the terminal, run `npm run dev`.
- After running 'npm run dev', if you encounter this error:

<img width="1248" alt="Screen Shot 2023-08-03 at 9 46 39 AM" src="https://github.com/Oscar-Santos/Virtual_OpenAI_Chatbot/assets/83252572/2f02f889-6ab3-4744-bc53-42e3e56213f2">


- Then ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can check this by running the following commands in your terminal or command prompt:
  </br>
  `node -v`
  </br>
  `npm -v`

- If these commands return the version numbers, it means Node.js and npm are installed. If not, you will need to install them from the official Node.js website [Node](https://nodejs.org).
  
- After this, run the following command in your terminal `npm install`.
- Once this installation is complete, run `npm run dev` in your terminal.
- However if you ask a question to the chatbot and the terminal gives you this error:

<img width="1280" alt="Screen Shot 2023-08-03 at 9 55 38 AM" src="https://github.com/Oscar-Santos/Virtual_OpenAI_Chatbot/assets/83252572/bfeac1df-db37-4155-8ad8-3eccd22d552a">

</br>
- Then, it means that you need to obtain an API key from OpenAI. Don't worry, getting one for free is easy.

## Obtaining an API key from OpenAI Chatgpt: 🟢

- To log in to your OpenAI account, please visit the [OpenAI site](https://openai.com/blog/chatgpt), If you don't have an account, you will need to create one.
- Once you login, go to `API`
- Go to `Personal` and click on `View API Keys`
- Then click on `+ Create new secret key`
- Now, copy your `API key` and your `Organization Key`

## Once you have obtained your OpenAI API key: 🟢

- Please return to the App and open your preferred editor (e.g., `VS Code`, `Atom`, etc.) from the Virtual_OpenAI_Chatbot directory.
- Open the `server.js` file.
- And paste your `OpenAI API key` and your `Organization key` into this line of code:

![Screen Shot 2023-07-06 at 3 57 00 PM](https://github.com/Oscar-Santos/brandCraftPro_robotApp/assets/83252572/ad7b0df5-b6e4-42c9-8d08-d13a54449be0)


- Save the file, and now, once again, run `npm run dev` in your terminal.
- Now the App should be up and running!! Feel free to ask any question to the App and see how it responds!!

  
## Framework: 🟢
<p>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
</p>

## Languages: 🟢
<p>
  <img src="https://img.shields.io/badge/JavaScript-ES2021-yellow?logo=javascript" />
  </br>
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  </br>
  <img src="https://img.shields.io/badge/HTML-<VERSION>-<COLOR>?logo=html5" />
  </br>
</p>

## Tools: 🟢
<p>
  <img src="https://img.shields.io/badge/Node.js-14.17.3-green?logo=node.js" /> 
  </br>
  <img src="https://img.shields.io/badge/Git-F05032.svg?&style=flaste&logo=git&logoColor=white" />
  </br>
  <img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />
  </br>
</p>

## Endpoints: 🟢

GET ALL TASKS
</br>
1)    #### Request
`GET http://localhost:4000/api/tasks`
```json
[
    {
        "_id": "64f86a04674cb962366e9653",
        "title": "FOOD",
        "description": "i need to buy groceries: milk, potatoes, rice, steak, chicken, avocados and grapes.",
        "priority": "Medium",
        "status": "To do",
        "user_id": "64f651a11a1d1ddcb65192ac",
        "createdAt": "2023-09-06T12:01:08.409Z",
        "updatedAt": "2023-09-06T12:01:08.409Z",
        "__v": 0
    },
    {
        "_id": "64f86a33674cb962366e9656",
        "title": "TECH",
        "description": "Look for a bigger monitor, 32 inches.",
        "priority": "High",
        "status": "in Progress",
        "user_id": "64f651a11a1d1ddcb65192ac",
        "createdAt": "2023-09-06T12:01:55.189Z",
        "updatedAt": "2023-09-06T12:01:55.189Z",
        "__v": 0
    }
]

```
LOGIN
</br>
1)    #### Request
`POST http://localhost:4000/api/user/login`
```json
{
    "email": "pepe@hotmail.com",
    "password": "ABCabc123!"
}
```
1)    #### Response

```
{
    "email": "pepe@hotmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY2NTFhMTFhMWQxZGRjYjY1MTkyYWMiLCJpYXQiOjE2OTM4NjUzMjIsImV4cCI6MTY5NDEyNDUyMn0.Xgj_eqU73_S03gJ8Cp8hVDlCIjisjXlRM065_5A0QLQ"
}
```
SIGNUP
</br>



## Vercel Deployment Link: 🟢

[Vercel Link](https://virtual-open-ai-chatbot.vercel.app/)
