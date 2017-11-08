import * as store from './postsStore';
import * as redditService from '../../services/reddit';

export async function fetchPosts(topicUrl) {
    const posts = await redditService.getPosts(topicUrl);
    store.setters.setPosts(posts);
}
