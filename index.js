const express = require("express");
const app = express();

const connectDB = require("./Config/database")
connectDB();

const bcrypt = require("bcryptjs")
const cors = require("cors");
const User = require("./Model/Userschema");
const Blog = require("./Model/Blogschema");
const jwt = require("jsonwebtoken");
app.use(cors());

function authenticateToken(req, res, next) {
    let token = req.headers['authorization'].split(' ')[1];
    console.log("token", token);
    if (!token) {
        return res.status(401).json({ message: "unauthorized access" });
    }
    let decoded = jwt.verify(token,'chacha');
    req.user = decoded;
    next()
}


// jwt.sign()
// jwt.verify()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.send("hello world")
})


app.post("/register", async function (req, res) {
    const { name, email, password, gender } = req.body;

    let salt = await bcrypt.genSalt();
    let hashpass = await bcrypt.hash(password, salt)

    const user1 = await User.create({ name, email, password: hashpass, gender });

    // jwt.sign(data,secret)

    let token = jwt.sign({_id : user1._id, name : user1.name}, "chacha");

    res.json({
        message: "user registered successfully",
        data: user1,
        token: token
    })
})

app.post("/login", async function (req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json({ message: "invalid password" });
    }

    const token = jwt.sign( { _id: user._id, name: user.name }, "chacha");

    res.json({
        message: "login successful",
        token: token,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
        }
    });
});



app.get("/get-user", async function (req, res) {
    const user1 = await User.find()
    res.json(user1);
})


app.get("/get-user/:id", async function (req, res) {
    const { id } = req.params;
    const user2 = await User.findById(id)
    res.json(user2)
})


app.delete("/delete-user/:id", async function (req, res) {
    const { id } = req.params;
    const user3 = await User.findByIdAndDelete(id)
    res.json(user3);
})


app.put("/update-user/:id", async function (req, res) {
    const { id } = req.params;
    let { name, age, email, password } = req.body;
    
    if (password) {
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
    }

    const user4 = await User.findByIdAndUpdate(id, { name, age, email, password },);
    res.json(user4);
});


app.post("/create-blog", authenticateToken, async function (req, res) {
    const { image, title, description, category } = req.body;
    const blog = await Blog.create({ image, title, description, category, author : req.user._id })
    res.json({
        message: "blog created successfully",
        data: blog
    })
})


app.get("/get-blog", async function (req, res) {
    const blogs = await Blog.find()
    res.json(blogs);
})


app.get("/get-blog/:id", async function (req, res) {
    const { id } = req.params;
    const blogs = await Blog.findById(id);
    res.json(blogs);
})


app.delete("/delete-blog/:id", async function (req, res) {
    const { id } = req.params;
    const del = await Blog.findByIdAndDelete(id)
    res.json(del);
})


app.put("/edit-blog/:id",authenticateToken, async function (req, res) {
    const { id } = req.params;
    const { image, title, description, category, author } = req.body;
    const edit = await Blog.findByIdAndUpdate(id, { image, title, description, category, author })
    res.json(edit);
})


app.listen("4000", function () {
    console.log("server is connected on port 4000");
})