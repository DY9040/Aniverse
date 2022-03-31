const { Comment } = require("../models");

const commentData = [
  {
    context: "Donec posuere metus vitae ipsum.",
    user_id: 10,
    item_id: 3,
  },
  {
    context: "Morbi non quam nec dui luctus rutrum.",
    user_id: 8,
    item_id: 1,
  },
  {
    context:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    user_id: 1,
    item_id: 1,
  },
  {
    context: "Nunc purus.",
    user_id: 4,
    item_id: 2,
  },
  {
    context: "Pellentesque eget nunc.",
    user_id: 7,
    item_id: 1,
  },
  {
    context: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    user_id: 4,
    item_id: 3,
  },
  {
    context: "In hac habitasse platea dictumst.",
    user_id: 1,
    item_id: 10,
  },
  {
    context: "Morbi non quam nec dui luctus rutrum.",
    user_id: 1,
    item_id: 5,
  },
  {
    context: "Duis ac nibh.",
    user_id: 9,
    item_id: 8,
  },
  {
    context: "Curabitur at ipsum ac tellus semper interdum.",
    user_id: 5,
    item_id: 7,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
