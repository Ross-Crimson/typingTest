import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { loadState, saveState } from "../utils/Store.js"

class JumblesService {
  setActiveJumble(JumbleId) {
    let selectedJumble = AppState.jumbles.find(jumble => jumble.id == JumbleId)
    AppState.activeJumble = selectedJumble
    this.StartGame()
  }

  CompareGame(playerEntry) {
    if (playerEntry.body == AppState.activeJumble.body) {
      //console.log(true)
      this.EndGame()

    }
    else {

    }
  }

  StartGame() {
    AppState.activeJumble.startTime = Date.now()
  }

  EndGame() {
    AppState.activeJumble.endTime = Date.now()
    this.SaveJumbles()
    //console.log(AppState.activeJumble)
  }

  SaveJumbles() {
    saveState('jumbles', AppState.jumbles)
  }

  LoadJumbles() {
    const jumblesFromLocalStorage = loadState('jumbles', [Jumble])
    AppState.jumbles = jumblesFromLocalStorage
  }

}

export const jumblesService = new JumblesService