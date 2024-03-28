import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = this.fastestTime == null ? 0 : this.FastestTime
    this.startTime = 0
    this.endTime = 0
  }

  get ListTemplate() { // a basic list template to get drawing
    return `
    <div class="col-12 d-flex justify-content-between">
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
              <div>${this.fastestTime}</div>
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
    console.log(time)
    if (this.fastestTime == 0) {
      this.fastestTime = time
      return time
    }
    if (time < this.fastestTime) {
      this.fastestTime = time
      return time
    }
    else {
      return this.fastestTime
    }
  }
}