function main() {
  console.log("loaded");
  class location {
    constructor(name, image, color, canGo) {
      this.name = name;
      this.image = image;
      this.color = color;
      this.canGo = canGo;
    }
  }
  let locations = [
    new location("You are inside a brimstone mine", [11], [235, 211, 64], "0010"),
    new location("You are at the entrance to the mine", [12], [89, 93, 87], "1010"),
    new location("A hill", [13], [117, 237, 243], "1110"),
    new location("Some bushes", [14], [202, 230, 51], "1010"),
    new location("An old deserted hut", [15], [220, 204, 61], "1010"),
    new location("The edge of a forest", [16], [167, 245, 63], "1010"),
    new location("A dark forest", [17], [140, 253, 99], "1100"),
    new location("A man nearby making tar", [21], [255, 190, 99], "0110"),
    new location("A timber yard", [22], [255, 190, 99], "1110"),
    new location("You are by a roadside shrine", [23], [167, 245, 63], "1111"),
    new location("You are by a small chapel", [24], [212, 229, 36], "1010"),
    new location(
      "You are on a road leading to a wood",
      [25],
      [167, 245, 63],
      "1110"
    ),
    new location("You are in a forest", [26, 65], [167, 245, 63], "1010"),
    new location("You are in a deep forest", [27, 67], [140, 253, 99], "1001"),
    new location("You are by the Vistula River", [31], [122, 232, 252], "0011"),
    new location("You are by the Vistula River", [32], [140, 214, 255], "1001"),
    new location("You are on a bridge over river", [33], [108, 181, 242], "0101"),
    new location("You are by the old tavern", [34], [255, 189, 117], "0010"),
    new location("You are at the town's end", [35], [255, 190, 99], "1101"),
    new location("You are in a butcher's shop", [36], [255, 188, 102], "0100"),
    new location("You are in a cooper's house", [37], [255, 188, 102], "0100"),
    new location("You are in the Wawel Castle", [41], [255, 176, 141], "0010"),
    new location("You are inside a dragon's cave", [42], [198, 205, 193], "1010"),
    new location("A perfect place to set a trap", [43], [255, 176, 141], "1001"),
    new location("You are by the water mill", [44], [255, 190, 99], "0010"),
    new location("You are at a main crossroad", [45], [255, 190, 99], "1111"),
    new location("You are on a town street", [46], [255, 190, 99], "1011"),
    new location(
      "You are in a frontyard of your house",
      [47],
      [255, 190, 99],
      "1101"
    ),
    new location("You are by a swift stream", [54], [108, 181, 242], "0010"),
    new location("You are on a street leading forest", [55], [255, 190, 99], "1101"),
    new location("You are in a woodcutter's backyard", [56], [255, 190, 99], "0100"),
    new location("You are in a shoemaker's house", [57], [254, 194, 97], "0001"),
    new location("You are in a bleak funeral house", [64], [254, 194, 97], "0010"),
    new location(
      "You are on a path leading to the wood",
      [26, 65],
      [167, 245, 63],
      "1011"
    ),
    new location("You are at the edge of a forest", [66], [167, 245, 63], "1011"),
    new location("You are in a deep forest", [27, 67], [140, 253, 9], "1000"),
  ];
  console.table(locations);
}
