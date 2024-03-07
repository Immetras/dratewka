import level from "./data/location_obj.js";

export default class Player {
  constructor() {
    this.position = [3, 6];
    this.carrying = null;

    this.update();
    this.main();
  }

  main() {
    console.log("loaded player");

    console.table(level);

    const input = document.getElementById("p-input");

    let move = "";

    document.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        move = input.value.toLowerCase();
        console.log(move);
        input.value = null;
      }
    });
  }
  update() {
    const current = level[this.position[0]][this.position[1]];
    const location = document.getElementById("location");
    const name = document.getElementById("name");

    location.style.backgroundImage = `url(static/img/${current.image[0]}${current.image[1]}.gif)`;
    location.style.backgroundColor = `${current.color}`;
    name.innerText = `${current.name}`;
    // console.log(`../img/${current.image[0]}${current.image[1]}.gif`);
  }
}
