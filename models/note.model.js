module.exports = mongoose => {
    const { Schema } = mongoose;
    const noteSchema = new Schema({
        id: {
            type: String,
            unique: true,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            reuired: true
        },
        content: {
            type: String,
        },
        dateAdded: {
            type: String,
            default: Date.now,
        },
    });

    return mongoose.model('notes', noteSchema);
}