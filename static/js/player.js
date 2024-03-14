import level from "./data/location_obj.js";
import items from "./data/items_obj.js";

export default class Player {
  constructor() {
    this.position = [3, 3];
    this.carrying = [];

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
      let tItem = false;

      switch (actVal.split(" ")[0]) {
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

        case "T":
          tItem = actVal.replace("T ", "");
        case "TAKE":
          !tItem ? (tItem = actVal.replace("TAKE ", "")) : null;

          for (let i = 0; i < this.current.items.length; i++) {
            const item = items[this.current.items[i]];
            if (tItem == item.nameTake && item.type) {
              console.log(`taking ${item.nameDisplay}`);
              this.carrying = this.current.items[i];
              this.current.items = this.current.items.slice(0, i).concat(this.current.items(i++));
              console.table(this.current);
            }
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
    const lItems = document.getElementById("l-items");

    location.style.backgroundImage = `url(static/img/${this.current.image[0]}${this.current.image[1]}.gif)`;
    location.style.backgroundColor = `${this.current.color}`;

    name.innerText = `${this.current.name}`;

    directions.innerText = null;
    const dirs = ["WEST", "SOUTH", "EAST", "NORTH"];
    for (let i = 0; i < this.current.canGo.length; i++) {
      const dir = this.current.canGo[i];
      dir == 1 ? (directions.innerText += `${dirs[i]},`) : null;
    }

    switch (this.current.items.length) {
      case 0:
        lItems.innerHTML = "nothing";
        break;

      default:
        for (let i = 0; i < this.current.items.length; i++) {
          const item = items[this.current.items[i]];

          lItems.innerText = `${item.nameDisplay}, `;
        }
        break;
    }

    // console.table(items);
    // console.warn(this.current.items);
  }
}
