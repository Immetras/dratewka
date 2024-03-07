import Location from "./location_cla.js";
export default [
  [
    new Location("You are inside a brimstone mine", [1, 1], "rgb(235,211,64)", "0010"),
    new Location("You are at the entrance to the mine", [1, 2], "rgb(89,93,87)", "1010"),
    new Location("A hill", [1, 3], "rgb(117,237,243)", "1110"),
    new Location("Some bushes", [1, 4], "rgb(202,230,51)", "1010"),
    new Location("An old deserted hut", [1, 5], "rgb(220,204,61)", "1010"),
    new Location("The edge of a forest", [1, 6], "rgb(167,245,63)", "1010"),
    new Location("A dark forest", [1, 7], "rgb(140,253,99)", "1100"),
  ],

  [
    new Location("A man nearby making tar", [2, 1], "rgb(255,190,99)", "0110"),
    new Location("A timber yard", [2, 2], "rgb(255,190,99)", "1110"),
    new Location("You are by a roadside shrine", [2, 3], "rgb(167,245,63)", "1111"),
    new Location("You are by a small chapel", [2, 4], "rgb(212,229,36)", "1010"),
    new Location("You are on a road leading to a wood", [2, 5], "rgb(167,245,63)", "1110"),
    new Location("You are in a forest", [2, 6], "rgb(167,245,63)", "1010"),
    new Location("You are in a deep forest", [2, 7], "rgb(140,253,99)", "1001"),
  ],

  [
    new Location("You are by the Vistula River", [3, 1], "rgb(122,232,252)", "0011"),
    new Location("You are by the Vistula River", [3, 2], "rgb(140,214,255)", "1001"),
    new Location("You are on a bridge over river", [3, 3], "rgb(108,181,242)", "0101"),
    new Location("You are by the old tavern", [3, 4], "rgb(255,189,117)", "0010"),
    new Location("You are at the town's end", [3, 5], "rgb(255,190,99)", "1101"),
    new Location("You are in a butcher's shop", [3, 6], "rgb(255,188,102)", "0100"),
    new Location("You are in a cooper's house", [3, 7], "rgb(255,188,102)", "0100"),
  ],

  [
    new Location("You are in the Wawel Castle", [4, 1], "rgb(255,176,141)", "0010"),
    new Location("You are inside a dragon's cave", [4, 2], "rgb(198,205,193)", "1010"),
    new Location("A perfect place to set a trap", [4, 3], "rgb(255,176,141)", "1001"),
    new Location("You are by the water mill", [4, 4], "rgb(255,190,99)", "0010"),
    new Location("You are at a main crossroad", [4, 5], "rgb(255,190,99)", "1111"),
    new Location("You are on a town street", [4, 6], "rgb(255,190,99)", "1011"),
    new Location("You are in a frontyard of your house", [4, 7], "rgb(255,190,99)", "1101"),
  ],

  [
    new Location(),
    new Location(),
    new Location(),
    new Location("You are by a swift stream", [5, 4], "rgb(108,181,242)", "0010"),
    new Location("You are on a street leading forest", [5, 5], "rgb(255,190,99)", "1101"),
    new Location("You are in a woodcutter's backyard", [5, 6], "rgb(255,190,99)", "0100"),
    new Location("You are in a shoemaker's house", [5, 7], "rgb(254,194,97)", "0001"),
  ],
  [
    new Location(),
    new Location(),
    new Location(),
    new Location("You are in a bleak funeral house", [6, 4], "rgb(254,194,97)", "0010"),
    new Location("You are on a path leading to the wood", [2, 6], "rgb(167,245,63)", "1011"),
    new Location("You are at the edge of a forest", [6, 6], "rgb(167,245,63)", "1011"),
    new Location("You are in a deep forest", [2, 7], "rgb(140,253,99)", "1000"),
  ],
];
