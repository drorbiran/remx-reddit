import * as store from './topicsStore';
import * as redditService from '../../services/reddit';


export function setLoading(isLoading) {
    store.setters.setLoading(isLoading);
}

export function fetchTopics() {
    setLoading(true);
    setTimeout(function() {
        const topics = redditService.getTopics();
        store.setters.setTopics(topics);
        console.log(topics);
        setLoading(false);
    }, 2000);
    
}
