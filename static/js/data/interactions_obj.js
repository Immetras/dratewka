import { Interaction } from "../iteraction_cla.js";

[
  new Interaction(10, 56, 11, "You opened a tool shed and took an axe"),
  new Interaction(11, 67, 12, "You cut sticks for sheeplegs"),
  new Interaction(12, 43, 13, "You prepared legs for your fake sheep, OK"),
  new Interaction(14, 34, 15, "The tavern owner paid you money"),
  new Interaction(15, 37, 16, "The cooper sold you a new barrel"),
  new Interaction(16, 43, 17, "You made a nice sheeptrunk, OK"),
  new Interaction(18, 36, 19, "The butcher gave you wool"),
  new Interaction(19, 43, 20, "You prepared skin for your fake sheep, OK"),
  new Interaction(21, 57, 22, "You used your tools to make a rag"),
  new Interaction(22, 43, 23, "You made a fake sheephead, OK"),
  new Interaction(24, 11, 25, [
    "You are digging... ",
    "and digging... ",
    "That's enough sulphur for you",
  ]),
  new Interaction(25, 43, 26, "You prepared a solid poison, OK"),
  new Interaction(27, 21, 28, "You got a bucket full of tar"),
  new Interaction(28, 43, 29, "You prepared a liquid poison, OK"),
  // new Interaction(gdy zebrane "wszystkie przedmioty(6 * OK), 43, 37, Your fake sheep is full of poison and ready to be eaten by the dragon"),
  new Interaction(37, 43, 30, [
    "The dragon noticed your gift...",
    "The dragon ate your sheep and died! - podmiana grafiki na lokacji(martwy smok)!",
  ]),
  // new Interaction(33, 43 + zab"ity smok, 34, You cut a piece of dragon's skin"),
  new Interaction(34, 57, 35, "You used your tools to make shoes"),
  new Interaction(35, 41, 36, "The King is impressed by your shoes"),
];
