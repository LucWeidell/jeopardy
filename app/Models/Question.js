export default class Question {

  constructor({question, answer, value, category}){
    this.question = question.replace('\\' ,'')
    this.answer = answer.replace('\\' ,'')
    this.value = value
    this.category = category
  }

  get Template() {
    return /*html*/ `
    <div class="col-12 mt-5">
    <div class="d-flex justify-content-around">
        <h4 class = "text-uppercase">Category: ${this.category}</h4>
        <h4>Value: ${this.value}</h4>
    </div>
    <div class="text-center mt-5">
        <h4>${this.answer}</h4>
        <div class="answer">
            <p>${this.answer}</p>
        </div>
    </div>
</div>
<div class="col-12 mt-5 d-flex justify-content-around flex-grow-1">
    <button type="button" class="btn btn-success">Correct</button>
    <button type="button" class="btn btn-danger">Incorrect</button>
</div>
</div>
    `
  }

}


/** [
{
"id": 149769,
"answer": "Wand",
"question": "In book 7,\"The Elder ____\"",
"value": 800,
"airdate": "2014-01-23T12:00:00.000Z",
"created_at": "2015-01-22T02:36:45.256Z",
"updated_at": "2015-01-22T02:36:45.256Z",
"category_id": 17364,
"game_id": 4405,
"invalid_count": null,
"category": {
"id": 17364,
"title": "harry potter & the chapter titles",
"created_at": "2015-01-18T18:13:10.275Z",
"updated_at": "2015-01-18T18:13:10.275Z",
"clues_count": 10
}
}
] */