import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObjectId.read);
posts.delete('/:id', postsCtrl.checkObjectId.remove);
posts.patch('/:id', postsCtrl.checkObjectId.update);

const post = new Router();
posts.get('/', postsCtrl.read);
posts.delete('/', postsCtrl.remove);
posts.patch('/', postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());
export default posts;