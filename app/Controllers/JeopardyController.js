import { ProxyState } from "../AppState.js";
import { jeapordyService } from "../Services/JeapordyService.js";



function _draw() {
  document.getElementById('question').innerHTML = ProxyState.question.Template
}


export default class JeopardyController {

  constructor(){
    ProxyState.on('question', _draw)

    this.getNewQuestion()
  }


  async getNewQuestion(){
    try {
      await jeapordyService.getNewQuestion()
    } catch (error) {
      console.log('Error getting new question,', error)
    }
  }
}