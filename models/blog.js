const mangoose = require('mangoose');

// Our Schema
const BlogSchema = new mangoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        rquired: false
    },
    status: {
        type: String,
        enum: ['DRAFT', 'PUBLISHED'],
        default: 'DRAFT'
    }
}, {
    timestamps: true
});

module.exports = mangoose.model('Blog', BlogSchema);