namespace app.Controllers {
  export class HomeController {
    public blogs: Array<app.i.IBlog>;


    constructor(private BlogService:app.Services.BlogService) {
      this.blogs = BlogService.getAll();

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
