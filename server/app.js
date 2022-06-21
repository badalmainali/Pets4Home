const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
// Routes Import:
const user = require("./routes/userRoute");
const google = require("./routes/googleRoutes");
const product = require("./routes/productRoutes");
const blogs = require("./routes/blogRoutes");
const orderRoutes=require('./routes/orderRoutes')
// Links to the site:
app.use("/", user);
app.use("/", google);
app.use("/api/products", product);
app.use("/api/blogs", blogs);
app.use("/api/orders",orderRoutes );



app.use(express.static(__dirname + '/public'));
app.use('/images', express.static('images'));


// Middleware for errors:
app.use(errorMiddleware);

module.exports = app;
