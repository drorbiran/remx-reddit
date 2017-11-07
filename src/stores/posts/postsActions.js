import * as store from './postsStore';
import * as redditService from '../../services/reddit';


export function setLoading(isLoading) {
    store.setters.setLoading(isLoading);
}

export async function fetchPosts(topicUrl) {
    setLoading(true);
    const posts = await redditService.getPosts(topicUrl);
    store.setters.setPosts(posts);
    setLoading(false);
}
