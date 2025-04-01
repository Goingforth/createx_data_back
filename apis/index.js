const app = require("./app");

const mongoose = require("mongoose");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log("Database connection successful");
        app.listen(PORT || 8080, () => {
            console.log("Server running. Use our API on port: 3000!");
        });
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });


// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send("Server Ok!");
//     res.end();
// });

