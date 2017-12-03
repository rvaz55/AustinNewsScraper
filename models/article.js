var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
    // `postId` is required, unique and of type String
    postid: {
        type: String,
        unique: true,
        required: true
    },
    // `title` is required, and of type String
    title: {
        type: String,
        required: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    },
    // 'img' is optional and of type String
    img: {
        type: String
    },
    // 'summary' is optional and of type String
    summary: {
        type: String,
    },
    // 'saved' is of type Boolean
    saved: {
        type: Boolean,
        default: false
    },
    // 'createdAt' is of type Date
    createdAt: {
        type: Date,
        default: Date.now
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
