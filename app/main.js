import JeopardyController from "./Controllers/JeopardyController.js";

class App {
  jeapordyController = new JeopardyController()
}

window["app"] = new App();
