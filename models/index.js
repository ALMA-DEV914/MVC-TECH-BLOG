//require the routes for the file paths
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "author_id",
});

User.hasMany(Comment, {
    foreignKey: "author_id",
    onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
