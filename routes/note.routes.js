module.exports = app => {
    const note = require("../controllers/note.controller");
    const router = require("express").Router();

    router.get("/list", note.findAll);
    router.post("/search", note.findSearch);
    router.post("/add", note.create);
    // router.put("/:id", note.update);
    router.post("/delete", note.delete);

    app.use("/note", router);
}