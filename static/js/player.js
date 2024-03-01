import level from "./data/location_obj.js";

export default class Player {
  constructor() {
    this.current = 47;
    this.carrying = null;

    this.main();
  }

  main() {
    console.log("loaded player");

    console.table(level);

    const input = document.getElementById("p-input");

    document.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        input.value = input.value.toLowerCase();
        console.log(input.value);
        input.value = null;
      }
    });
  }
}
