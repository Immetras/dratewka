import level from "./data/location_obj.js";
import items from "./data/items_obj.js";

export default class Player {
  constructor() {
    this.position = [3, 3];
    this.items = { location: {}, player: {} };

    this.update();
    this.main();
  }

  main() {
    console.log("loaded player");

    console.table(level);
    window.addEventListener("keydown", this.action);
  }

  action = (e) => {
    if (e.key == "Enter") {
      const input = document.getElementById("p-input");
      let actVal = "";

      actVal = input.value.toUpperCase();
      input.value = null;
      let tItem = false;
      let uItem = false;
      let dItem = false;

      switch (actVal.split(" ")[0]) {
        case "W":
        case "WEST":
          if (this.current.canGo[0] == 1) {
            this.position[1]--;
            this.display("You are going WEST", true);
          }
          break;

        case "S":
        case "SOUTH":
          if (this.current.canGo[1] == 1) {
            this.position[0]++;
            this.display("You are going SOUTH", true);
          }
          break;

        case "E":
        case "EAST":
          if (this.current.canGo[2] == 1) {
            this.position[1]++;
            this.display("You are going EAST", true);
          }
          break;

        case "N":
        case "NORTH":
          if (this.current.canGo[3] == 1) {
            this.position[0]--;
            this.display("You are going NORTH", true);
          }
          break;

        case "T":
          tItem = actVal.replace("T ", "");
        case "TAKE":
          !tItem ? (tItem = actVal.replace("TAKE ", "")) : null;

          for (let i = 0; i < Object.keys(this.items.location).length; i++) {
            const item = this.items.location[Object.keys(this.items.location)[i]];
            if (item.nameTake == tItem && item.type) {
              this.items.player = item;
              delete this.current.items[Object.keys(this.items.location)[i]];
              // this.current.items[Object.keys(this.items.location)[i]] = false;
              this.display(`You are taking ${item.nameDisplay}`, true);
            } else if (!item.type) {
              this.display("You can't carry it", true);
            } else {
              this.display("There isn't anything like that here", true);
            }
          }

          break;
        case "D":
          dItem = actVal.replace("D ", "");
        case "DROP":
          !dItem ? (dItem = actVal.replace("DROP ", "")) : null;

          const item = this.items.player;

          if (Object.keys(item).length > 0) {
            if (item.nameTake == dItem) {
              this.current.items[item.id] = true;
              this.items.player = {};
              this.display(`You are about to drop ${item.nameDisplay}`, true);
            }
          } else {
            this.display("You are not carrying anything", true);
          }

          break;

        default:
          console.warn("unknown command:", actVal);
          break;
      }
    }
  };

  display(text, change) {
    const mess = document.getElementById("player");
    const input = `<input type="text" id="p-input" autofocus onblur="this.focus()" />`;
    mess.innerText = text;
    setTimeout(
      () => {
        mess.innerText = "Now what?";
        mess.innerHTML += input;
        document.getElementById("p-input").focus();

        this.update();
      },
      change ? 666 : 0
    );
  }

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

    lItems.innerText = null;

    this.items.location = {};

    switch (Object.keys(this.current.items).length) {
      case 0:
        lItems.innerHTML = "nothing";
        break;

      default:
        for (let i = 0; i < Object.keys(this.current.items).length; i++) {
          if (this.current.items[Object.keys(this.current.items)[i]] == true) {
            const item = items[Object.keys(this.current.items)[i]];
            console.log(this.current.items[Object.keys(this.current.items)[i]]);

            this.items.location[Object.keys(this.current.items)[i]] = item;
          }
        }

        for (let i = 0; i < Object.keys(this.items.location).length; i++) {
          const item = this.items.location[Object.keys(this.items.location)[i]];

          lItems.innerText += `${item.nameDisplay}, `;
        }
        break;
    }

    Object.keys(this.items.player).length > 0
      ? (pItems.innerText = this.items.player.nameDisplay)
      : (pItems.innerText = "nothing");

    console.table(this.items);
    console.table(this.current);
  }
}
