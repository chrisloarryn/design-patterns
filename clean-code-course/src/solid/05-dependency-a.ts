import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService } from './05-dependency-c';

// Main
(async () => {
  // const provider = new JsonDataBaseService();
  const provider = new LocalDataBaseService;

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();