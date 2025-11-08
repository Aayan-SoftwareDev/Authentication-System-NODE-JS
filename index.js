/*
    This is the main file of the project, this project is used to create an authentication
    system using the express framework and using cookies, meaning that it is stateful auteentication.
*/

// The import statements
const express = require('express');
const userRoutes = require('./routes/user');
const {connectMongoDB} = require('./connect');
const cookieParser = require('cookie-parser');
const {session} = require('./models/session');

// The app variable
const app = express();

// Cookie parser middleware
app.use(cookieParser());
app.use(express.json()); // for JSON payloads
app.use(express.urlencoded({ extended: true })); // for form data

// The PORT number
const PORT = 8000;

const url = "mongodb+srv://Ayan_dev:BrkfrgIKGrpShklU@cluster0.bc2t4wp.mongodb.net/?appName=Cluster0";
connectMongoDB(url);

// If POST request is sent to /user, it will redirect it to the user router
app.use('/user', userRoutes);

app.use(async (req, res, next) => {
    console.log("Authenticating the user using cookies...");
    if(!req.cookies.session_id){
        return res.status(401).end("<p>Not</p>");
    }

    const sessionId = req.cookies.session_id;
    console.log("Session ID from cookie: ", sessionId);
    const findSession = await session.findOne({sessionId});
    if(!findSession){
        return res.status(401).end("<p>Not</p>");
    }

    req.userId = findSession.userId;
    next();
})

app.get('/', (req, res) => {
    res.end("<h1>This is the main Page</h1>");
})
// The app listener, listenes for incoming requests on the on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});