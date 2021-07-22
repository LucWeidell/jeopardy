import { ProxyState } from "../AppState.js"
import { playersService } from "../Services/PlayersService.js"


function _drawAll(){
  const players = ProxyState.players
  let template = '<option selected disable>Choose a player</option>'

  players.forEach(p=> template += `<option>${p.name}</option>`)
  document.getElementById('player-name').innerHTML = template
}

function _updateScore() {
  document.getElementById('score').innerText = ProxyState.activePlayer.points
}


export default class PlayersController{

  constructor(){
    ProxyState.on('players', _drawAll)
    ProxyState.on('activePlayer', _updateScore)

    this.getAllPlayers()
  }

  async getAllPlayers() {
    try {
      await playersService.getAllPlayers()
    } catch (error) {
      console.log('error on getting players', error)
    }
  }

  // Note creates player with sweet alert form
  async addPlayer() {
    try {
      //NOTE take value prop make it name: Name: which is what the user inputed
      const {value: name} = await Swal.fire({
        title: 'New Player',
        input: 'text',
        inputLabel: 'Your Name',
        showCancelButton: true,
        inputPlaceholder: 'Enter your name address'
      })
      if(name){
        await playersService.createPlayer(name)
      }
    }
    catch (error) {
      console.log('failed adding player:' , error)
    }
  }



    // const player = await Swal.fire({
    //   title: 'New Player',
    //   input: 'text',
    //   inputLabel: 'Enter Your NAme',
    //   showCancelButton: true,
    //   inputValidator: (player) => {
    //     if (!player) {
    //       return 'You need to write a Name! '
    //     }
    //   }
    // })

    setActivePlayer(event){
      playersService.setActivePlayer(event.target.value)
      //console.log(event.target['player-name'])
    }


}