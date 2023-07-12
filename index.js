const express = require('express');
const cors = require('cors');
const db = require('./models');
const bodyParser = require('body-parser');
const app = express();

const corsOptions = {
    origin: "*"
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// konek ke database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log('database connected'))
    .then(() => {
        app.get("/api", (req, res) => {
            const response = { msg: "API Works!" };
            res.json(response)
        })
    })
    .catch(err => {
        console.log(`gagal terhubung, ${err.message}`);
        process.exit();
    });

//Memanggil routes user
require("./routes/note.routes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))
