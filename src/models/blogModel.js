const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    body: {type: String, required: true, trim: true},
    authorId: {required: true, type: mongoose.Types.ObjectId, refs: 'Author(project-1)'},
    tags: [{type: String, trim: true}],
    category: {type: String, trim: true, required: true},
    subcategory: [{type: String, trim: true}],
    isPublished: {type: Boolean, default: false},
    publishedAt: {type: Date, default: null},
    isDeleted: {type: Boolean, default: false},
    deletedAt: {type: Date, default: null},
}, { timestamps: true })

module.exports = mongoose.model('Blog(project-1)', blogSchema)