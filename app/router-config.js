import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JumblesController],
    view: 'app/views/JumblesView.html'

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])