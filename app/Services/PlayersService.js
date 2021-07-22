import { ProxyState } from "../AppState.js";
import { sandbox } from "./AxiosService.js";

class PlayerService{

  constructor(){}

  async getAllPlayers(){
    const res = await sandbox.get()
    ProxyState.players = res.data
  }




  async createPlayer(name) {
    //NOTE passing object with key name : which is player POJO
    const res = await sandbox.post('', { name })      // OR {'name': name})
    ProxyState.activePlayer = res.data
    ProxyState.players = [...ProxyState.players, res.data]

  }

  setActivePlayer(name) {
    const player = ProxyState.players.find(p=> p.name == name)
    ProxyState.activePlayer = player
    console.log('active player changed too', player.name)
  }

  // RESTful convention for put is Collection/id
  // REVIEW
  async givePoints(val) {
    ProxyState.activePlayer.points += val
    await sandbox.put(ProxyState.activePlayer.id, ProxyState.activePlayer)
    ProxyState.activePlayer = ProxyState.activePlayer
  }
  // REVIEW
  async losePoints(val) {
    ProxyState.activePlayer.points -= val
    await sandbox.put(ProxyState.activePlayer.id, ProxyState.activePlayer) // or {points: ProxyState.activePlayer.points}
    ProxyState.activePlayer = ProxyState.activePlayer
  }

}

export const playersService = new PlayerService()