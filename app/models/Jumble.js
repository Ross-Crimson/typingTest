import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = Infinity
    this.startTime = 0
    this.endTime = 0
  }

  get ListTemplate() { // a basic list template to get drawing
    return `
    <div class="col-12 d-flex justify-content-between py-2">
    <button onclick="app.JumblesController.setActiveJumble('${this.id}')">START</button>
    <p>${this.name}</p>
    <div>⏲️${this.FastestTime}</div>
    <div>${''}WPM</div>
  </div>`
  }

  get JumbleTemplate() {
    return `
    <div class="col card">
          <div class="row ">
            <div class="col d-flex justify-content-between">
              <div>${this.name}</div>
              <div>${this.FastestTime}</div>
            </div>
          </div>
          <div class="row">
            <div>${this.body}</div>
          </div>
        </div>
        `
  }

  get FastestTime() {
    let time = (this.endTime - this.startTime) / 1000
    if (this.fastestTime == Infinity) return "N/A"
    return (this.fastestTime / 1000).toFixed(3)
  }
}