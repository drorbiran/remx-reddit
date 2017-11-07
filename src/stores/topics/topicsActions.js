import * as store from './topicsStore';
import * as redditService from '../../services/reddit';


export function setLoading(isLoading) {
    store.setters.setLoading(isLoading);
}

export async function fetchTopics() {
    setLoading(true);
    const topics = await redditService.getTopics();
    store.setters.setTopics(topics);
    setLoading(false);
}
