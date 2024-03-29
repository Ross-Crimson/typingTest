import { AppState } from "../AppState.js"
import { jumblesService } from "../services/JumblesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

export class JumblesController {
  constructor() {

    AppState.on('jumbles', this.drawJumbles)
    AppState.on('activeJumble', this.drawJumblesView)
    jumblesService.LoadJumbles()
    //this.drawJumbles()
  }

  drawJumbles() {
    let JumblesHTML = ''
    AppState.jumbles.forEach(jumble => JumblesHTML += jumble.ListTemplate)
    setHTML('challenges', JumblesHTML)
  }

  drawJumblesView() {
    setHTML('jumble-view', AppState.activeJumble.JumbleTemplate)
  }

  setActiveJumble(JumbleId) {
    jumblesService.setActiveJumble(JumbleId)
    this.drawJumblesView()
  }

  CompareGame() {
    event.preventDefault()
    let playerEntry = getFormData(event.target)
    jumblesService.CompareGame(playerEntry)
    this.drawJumbles()
  }

  CreateJumble() {
    event.preventDefault()
    const form = getFormData(event.target)
    jumblesService.CreateJumble(form)
  }

}