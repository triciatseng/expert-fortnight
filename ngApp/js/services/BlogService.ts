namespace app.Services {
  interface IBlogResource extends ng.resource.IResource<IBlogResource>, app.i.IBlog{}
  interface IBlogClass extends ng.resource.IResourceClass<IBlogResource>{}

  export class BlogService{
    private BlogResource: IBlogClass;

    public getAll(){
        return this.BlogResource.query();
    }

    public createBlog(blog:app.i.IBlog){
      return this.BlogResource.save(blog).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.BlogResource = <IBlogClass>$resource('/api/v1/blogs:id');
    }
  }

  angular.module('app').service('BlogService',BlogService);
}
