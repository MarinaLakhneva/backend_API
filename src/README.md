Instruction manual:
1. Clone the repository

2. Install node.js

3. We use the webstorm development environment (convenient)

4. Initialize the project:
in the terminal we write: npm init -y 
(a file will appear in the root of the project: package.json)

5. Install the first dependency:
in the terminal we write: npm install express

6. In the file package.json in the "scripts" , replace everything with "start": "node index.js"

7. In the file package.json adding "type": "module",

8. In the file package.json in the "scripts" , add "dev": "nodemon index.js"
(now you can write (npm run dev) in the terminal to automatically restart the server when there are changes in the code)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Backend_api:
I mode 3 endpoints, which are the endpoints of other API
I was looking for open API via: 
https://swapi.dev/
.......................................................................................................................
postman:
https://www.postman.com/universal-capsule-217652/workspace/my-workspace/collection/23962628-1b588a85-8960-499f-86fb-73e5356d9b8b?ctx=documentation