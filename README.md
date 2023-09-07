![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# TASK TRACKER  APP

## Overview 🟢 
 
 Task Tracker App offers user management capabilities, enabling the creation and administration of multiple users with individual secure login credentials. Robust authentication and authorization mechanisms ensure data protection, while its core task management functionalities allow users to effortlessly create, update, and delete tasks, with the flexibility to specify attributes such as title, description, priority (ranging from "Low" to "High"), and status (including options like "To Do," "In Progress," and "Completed"). Dive into a seamless user experience, where authentication safeguards access for authorized individuals, enabling task creation, priority and status adjustments, and progress tracking. Task Tracker App is your gateway to enhanced productivity and task management efficiency.


![Screen Shot 2023-09-06 at 6 04 23 AM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/a4795122-31a8-4159-b87c-8bce3b9ce1d1)
</br>

![Screen Shot 2023-09-06 at 6 03 43 AM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/9a862688-ad0e-4226-850c-63a75fdd032d)


![Screen Shot 2023-09-06 at 6 02 57 AM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/2b55ca69-9bde-4b9a-b82f-6449278e934a)
</br>

## Table Relationship between Users and Tasks 🟢 

![Screen Shot 2023-09-06 at 7 17 57 PM](https://github.com/Oscar-Santos/TASK_TRACKER_App/assets/83252572/0208c72f-2f28-485e-8deb-df3917e83542)

  
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

CREATE A TASK
</br>
1)    #### Request
`POST http://localhost:4000/api/user/login`
```json
{
        "title": "FOOD",
        "description": "i need to buy groceries: milk, potatoes, rice, steak, chicken, avocados and grapes.",
        "priority": "Medium",
        "status": "To do"
}
```
1)    #### Response
  ```json
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
}
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

```json
{
    "email": "pepe@hotmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY2NTFhMTFhMWQxZGRjYjY1MTkyYWMiLCJpYXQiOjE2OTM4NjUzMjIsImV4cCI6MTY5NDEyNDUyMn0.Xgj_eqU73_S03gJ8Cp8hVDlCIjisjXlRM065_5A0QLQ"
}
```
SIGNUP
</br>
1)    #### Request
`POST http://localhost:4000/api/user/signup`
```json
{
    "email": "pepe@hotmail.com",
    "password": "ABCabc123!"
}
```
1)    #### Response

```json
{
    "email": "pepe@hotmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY2NTFhMTFhMWQxZGRjYjY1MTkyYWMiLCJpYXQiOjE2OTM4NjQzNTMsImV4cCI6MTY5NDEyMzU1M30.6KEJCS02d9OzQV_e3Lz2BaFwqdfUvZkiJM_tC2yhAlw"
}
```



## Vercel Deployment Link: 🟢

[Vercel Link]()
