Added CodeExplanation word document

**BackEnd:**
1. Technologies: MongoDB, ExpressJS, NodeJS, Tailwind CSS - Flowbite
2. Blog.js – Create schema for our Database
3. Blogs.js – Create router for CRUD operations, it will look for get, post, delete operations from FE.
4. Perform logics required by FE and send the response.
5. Server.js – Connect the MongoDB and listen to port and adding our api routes to listen

**FrontEnd:**
1. /components/alert: Notification for Create, Update, Delete, Read
2. /pages/BlogPage: Individual post to see detailed view of blog, can see edit button and delete button
3. /pages/CreateBlog: To create new blog with title and description
4. /pages/EditBlog: To update existing blog
5. /pages/HomePage: Show all blog posts with readmore, edit and deletebutton

6. App.js – Routing to each screen – HomePage, EditPage, Individual Post Page, Create blog Page
7. MyContext.js – useContext API is used to maintain the reusable functions to be accessed globally.
8. Functions in this file perform interceptor for ExpressJS routes.

9. Index.js – To render the reactapp to root of html


**Installation**
1. Checkout src folder – npm install
2. Checkout Backend folder – npm install
3. Open - http://localhost:3000/ in chrome

