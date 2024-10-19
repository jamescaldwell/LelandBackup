const express = require("express");
const app = express();
const routes = require("./routes/libraryroutes");

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Backend is listening on port " + PORT);
})