import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { Pop } from "../utils/Pop.js"
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
      Pop.toast("Incorrect", "warning", "top")
    }
  }

  CreateJumble(form) {
    AppState.jumbles.push(new Jumble(form))
  }

  StartGame() {
    AppState.activeJumble.startTime = Date.now()
  }

  EndGame() {
    AppState.activeJumble.endTime = Date.now()

    let elapsedTime = AppState.activeJumble.endTime - AppState.activeJumble.startTime
    if (AppState.activeJumble.fastestTime > elapsedTime) {
      AppState.activeJumble.fastestTime = elapsedTime
      this.SaveJumbles()
      AppState.emit("activeJumble")
    }
  }

  SaveJumbles() {
    saveState('jumbles', AppState.jumbles)

    //console.log(AppState.jumbles)
  }

  LoadJumbles() {
    const jumblesFromLocalStorage = loadState('jumbles', [Jumble])
    if (jumblesFromLocalStorage.length == 0) {
      AppState.emit('jumbles')
      return
    }
    AppState.jumbles = jumblesFromLocalStorage
    console.log(AppState.jumbles)
  }

}

export const jumblesService = new JumblesService