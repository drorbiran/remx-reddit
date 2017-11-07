import _ from 'lodash'

export async function getTopics() {
    console.log('getting topics');
    const url = "https://www.reddit.com/subreddits/default.json"
    const subredditsRes = await fetch(url);
    const subredditsData = await subredditsRes.json();
    const subreddits = _.get(subredditsData,'data.children');
    const topics = _parseTopics(subreddits);
    console.log(topics);
    return topics
}

function _parseTopics(subreddits) {
    return subreddits.map((subreddit) => {
        return {
            url: subreddit.data.url,
            title: subreddit.data.display_name,
            description: subreddit.data.public_description,
            icon_img: (subreddit.data.icon_img)? subreddit.data.icon_img : "https://b.thumbs.redditmedia.com/S6FTc5IJqEbgR3rTXD5boslU49bEYpLWOlh8-CMyjTY.png"
        }
    });
}

export function getPosts(url){
    return [
            { 
                url: "https://www.reddit.com/r/Jokes/comments/7b4d2i/a_teenage_boy_was_delivering_papers_to_an/",
                title: "A teenage boy was delivering papers to an apartment house.",
                score: 12716
            },
            {
                url: "https://www.reddit.com/r/Jokes/comments/7b1fe6/i_told_a_girl_you_look_great_without_glasses/",
                title: "I told a girl you look great without glasses",
                score: 11259
            }
    ]
}