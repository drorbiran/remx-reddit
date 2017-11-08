import * as store from './topicsStore';
import * as redditService from '../../services/reddit';

export async function fetchTopics() {
    const topics = await redditService.getTopics();
    store.setters.setTopics(topics);
}
