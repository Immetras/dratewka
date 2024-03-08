import level from "./data/location_obj.js";

export default class Player {
  constructor() {
    this.position = [3, 6];
    this.carrying = "nothing";

    this.update();
    this.main();
  }

  main() {
    console.log("loaded player");

    console.table(level);

    document.addEventListener("keydown", this.action);
  }

  action = (e) => {
    if (e.key == "Enter") {
      const input = document.getElementById("p-input");
      let actVal = "";

      actVal = input.value.toUpperCase();
      input.value = null;

      switch (actVal) {
        case "W":
        case "WEST":
          if (this.current.canGo[0] == 1) {
            this.position[1]--;
            this.update();
          }
          break;
        case "S":
        case "SOUTH":
          if (this.current.canGo[1] == 1) {
            this.position[0]++;
            this.update();
          }
          break;
        case "E":
        case "EAST":
          if (this.current.canGo[2] == 1) {
            this.position[1]++;
            this.update();
          }
          break;
        case "N":
        case "NORTH":
          if (this.current.canGo[3] == 1) {
            this.position[0]--;
            this.update();
          }
          break;

        default:
          console.warn("unknown command:", actVal);
          break;
      }
    }
  };

  update() {
    this.current = level[this.position[0]][this.position[1]];
    const location = document.getElementById("location");
    const name = document.getElementById("name");
    const directions = document.getElementById("directions");
    const pItems = document.getElementById("p-items");

    location.style.backgroundImage = `url(static/img/${this.current.image[0]}${this.current.image[1]}.gif)`;
    location.style.backgroundColor = `${this.current.color}`;

    name.innerText = `${this.current.name}`;

    directions.innerText = null;
    const dirs = ["WEST", "SOUTH", "EAST", "NORTH"];
    for (let i = 0; i < this.current.canGo.length; i++) {
      const dir = this.current.canGo[i];
      dir == 1 ? (directions.innerText += `${dirs[i]},`) : null;
    }

    // console.table(this.current);
  }
}
