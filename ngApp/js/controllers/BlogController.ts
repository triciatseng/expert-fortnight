namespace app.Controllers {
  export class BlogCreateController{

    public blog: app.i.IBlog;

    public create(){
      this.BlogService.createBlog(this.blog).then((res) => {
        this.$state.go('Home');
      });
    }

    constructor(
      private BlogService:app.Services.BlogService,
      private $state: ng.ui.IStateService
    ){}
  }
  angular.module('app').controller('BlogCreateController',BlogCreateController);
}
