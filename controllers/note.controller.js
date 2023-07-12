const db = require("../models");
const Note = db.note;

exports.findAll = async (req, res) => {
    await Note.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ msg: err.message }));
}
exports.findSearch = async (req, res) => {
    var notes = await Note.find({ userId: req.body.userId });
    res.json(notes);
}
exports.create = async (req, res) => {
    await Note.deleteOne({ id: req.body.id });

    const newNote = new Note({
        id: req.body.id,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    })
    await newNote.save();
    const response = { msg: "New Note Created" }
    res.json(response);
}
exports.delete = async (req, res) => {
    await Note.deleteOne({ id: req.body.id });
    const response = { msg: "Note Deleted" }
    res.json(response);
}

// exports.update = (req, res) => {
    //     const id = req.params.id;
    //     req.body.tanggal_lahir = new Date(req.body.tanggal_lahir);
    //     Note.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    //         .then(data => {
    //             if (!data) {
    //                 res.status(404).send({ msg: "tidak dapat mengupdate data" });
    //             }
    //             res.send({ msg: "Data berhasil diupdate" });
    //         })
    //         .catch(err => res.status(500).send({ msg: err.message }));
    // }