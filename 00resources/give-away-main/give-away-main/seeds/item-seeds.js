const { Item } = require("../models");

const itemdata = [
  {
    item_text: "Nunc rhoncus dui vel sem.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 1,
  },
  {
    item_text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 2,
  },
  {
    item_text: "Aliquam erat volutpat. In congue.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 3,
  },
  {
    item_text:"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 4,
  },
  {
    item_text: "In hac habitasse platea dictumst.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 5,
  },
  {
    item_text: "Vivamus vestibulum sagittis sapien.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 6,
  },
  {
    item_text:"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 7,
  },
  {
    item_text: "Sed vel enim sit amet nunc viverra dapibus.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 8,
  },
  {
    item_text:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 9,
  },
  {
    item_text: "Morbi a ipsum.",
    name: "Item Title",
    url: "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg",
    user_id: 10,
  },
];

const seedItems = () => Item.bulkCreate(itemdata);

module.exports = seedItems;
