import * as store from './postsStore';
import * as redditService from '../../services/reddit';


export function setLoading(isLoading) {
    store.setters.setLoading(isLoading);
}

export function fetchPosts() {
    setLoading(true);
    setTimeout(function() {
        const posts = redditService.getPosts();
        store.setters.setPosts(posts);
        setLoading(false);
    }, 2000);   
}
