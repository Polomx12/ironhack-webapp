const { Schema, model } = require("mongoose");

const mediaSchema = new Schema(
    {
        name: {
            type:String,
            required: true
        },
        Category: {
            type: String,
            required: true,
            enum: ["Anime", "Music", "Documentary", "Movie"],
            trim: true
        },
        description: {
            type: String
        },
        genre: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        }
    }, {
        timestamps:true
    }
)



module.exports = model("Media", mediaSchema);
