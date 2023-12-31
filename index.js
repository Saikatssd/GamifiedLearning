import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend_basic"
})
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

});

const User = mongoose.model("User", userSchema);



const app = express();

// Using Middlewares
// app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// Setting up View Engine
app.set("view engine", "ejs");

const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decoded = jwt.verify(token, "sdjasdbajsdbjasd");

        req.user = await User.findById(decoded._id);

        next();
    } else {
        res.redirect("/login");
    }
};

app.route("/").get((req, res) => {
    //console.log(readFileSync(path.join(__dirname, "views/index.html")));
    res.sendFile("index.html");
})


app.get("/user", isAuthenticated, (req, res) => {
    res.render("logout", { name: req.user.name });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/login", async (req, res) => {
    const { email, password} = req.body;

    let user = await User.findOne({ email });

    if (!user) return res.redirect("/register");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
        return res.render("login", { email, message: "Incorrect Password" });

    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });

    res.redirect("/user");
});

app.post("/register", async (req, res) => {
    const { name, email, password} = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.redirect("/login");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name,
        email,
        password: hashedPassword,

    });

    const token = jwt.sign({ _id: user._id }, "sdjasdbajsdbjasd");

    // user.coins = 'King in the Nort';
    // await coins.save();

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    });
    res.redirect("/user");
});


app.get("/logout", (req, res) => {
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.render("/user");
});

app.get("/study", async (req, res) => {
    res.render("study");

});

app.get("/play", (req, res) => {
    res.render("play");
});

app.get("/current_affairs", (req, res) => {
    res.render("currentAffairs");
});

app.get("/colorguess", (req, res) => {
    res.render("colorguess");
});
app.get("/about", (req, res) => {
    res.render("about");
});


///Contact code

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
});

const Message = mongoose.model("Message", messageSchema);


app.get("/contact", (req, res) => {
    res.render("contact");
});


app.post("/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        console.log("Error in contact form ");
        return res.json({ error: "plzz fill the contact form " });
    }
    else {
        await Message.create({
            name,
            email,
            phone,
            message,
        });
        res.send("Message Sent Successfully 🙏.");

    }

});



app.listen(5000, () => {
    console.log("Server is working");
});


