**BackEnd:**
Technologies: MongoDB, ExpressJS, NodeJS
Blog.js – Create schema for our Database
Blogs.js – Create router for CRUD operations, it will look for get, post, delete operations from FE.
Perform logics required by FE and send the response.
Server.js – Connect the MongoDB and listen to port and adding our api routes to listen

**FrontEnd:**
/components/alert: Notification for Create, Update, Delete, Read
/pages/BlogPage: Individual post to see detailed view of blog, can see edit button and delete button
/pages/CreateBlog: To create new blog with title and description
/pages/EditBlog: To update existing blog
/pages/HomePage: Show all blog posts with readmore, edit and deletebutton

App.js – Routing to each screen – HomePage, EditPage, Individual Post Page, Create blog Page
MyContext.js – useContext API is used to maintain the reusable functions to be accessed globally.
Functions in this file perform interceptor for ExpressJS routes.

Index.js – To render the reactapp to root of html


**Installation**
Checkout src folder – npm install
Checkout Backend folder – npm install
Open - http://localhost:3000/ in chrome

