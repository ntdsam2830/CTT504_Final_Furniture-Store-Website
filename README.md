# Future Furniture - Online Furniture Store & Admin Dashboard

This is a group project assignment from the course **CTT504 – Software Design (21KTPM2)** at VNU-HCM, University of Science.

## Project contributors
1. Nguyễn Quỳnh Hương ([qhuongng](https://github.com/qhuongng))
2. Đặng Nhật Hòa ([hoadang0305](https://github.com/hoadang0305))
3. Nguyễn Thái Đan Sâm ([ntdsam2830](https://github.com/ntdsam2830))
4. Nguyễn Lê Tấn Phúc ([TanPhuc1805](https://github.com/TanPhuc1805))

## General information
The system was developed using the MERN stack. Aside from the server, it consists of 2 domains:
- The **buyer's site** allows users to browse and purchase furniture items from the store.
- The **admin dashboard** allows furniture suppliers to track sales and manage their inventory.

## Demo
The **buyer's site** is hosted on Vercel at [https://my-furniro.vercel.app](https://my-furniro.vercel.app/), and the admin dashboard at [https://seller-furniro.vercel.app](https://seller-furniro.vercel.app/). Below is sample credentials to access the admin dashboard:
- Email address: **123<i></i>@gmail.com**
- Password: **123**

A demo video is also available on [YouTube](https://youtu.be/7caeTPyAR8s) (in Vietnamese).

## Build & run the system locally
[Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are required to build and run the system.

1. Clone the repository for local development.
   
2. Navigate to the **server** folder.
    - Set up a **.env** file in the same directory as **package.json** with the following variables:
     
        ```
          PORT = 3600
          MONGO_URL = mongodb+srv://nhathoa22:18102018nhathoa@cluster0.kxofuma.mongodb.net/finalProject?retryWrites=true&w=majority
          USER_TOKEN = normalUser
          SELLER_TOKEN = adminUser
          NODE_ENV = development
          
          SELLER_URL = http://localhost:3200
          USER_URL = http://localhost:3000
          
          EMAIL = <YOUR EMAIL ADDRESS TO SEND NOTIFICATION EMAILS>
          PASSEMAIL = <YOUR EMAIL ADDRESS PASSWORD>
        ```
    - Run `npm i` to install the required dependencies.

3. Navigate to the **seller** folder.
    - Set up a **.env** file in the same directory as **package.json** with the following variables:
     
        ```
          REACT_APP_SERVER_URL = http://localhost:3600/api
        ```
    - Run `npm i` to install the required dependencies.

4. Navigate to the **user** folder.
    - Set up a **.env** file in the same directory as **package.json** with the following variables:
     
        ```
          REACT_APP_SERVER_URL = http://localhost:3600/api
        ```
    - Run `npm i` to install the required dependencies.

4. Navigate to the root folder and run `npm i` to install the required dependencies.

5. Run `npm run dev` to build and run the project. The server should be available at **http://<i></i>localhost:3600**, the buyer's site at **http://<i></i>localhost:3000**, and the admin dashboard at **http://<i></i>localhost:3200**.
