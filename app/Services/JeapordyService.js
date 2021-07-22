import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { jeapordyApi } from "./AxiosService.js"


class JeopardyService{

  constructor(){}



  async getNewQuestion() {
    const res = await jeapordyApi.get()
    console.log(res.data)
    if(!res.data[0].question){
      this.getNewQuestion()
      return
    }
    ProxyState.question = new Question(res.data[0])
  }


}

export const jeapordyService = new JeopardyService()