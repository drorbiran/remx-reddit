export function getTopics() {
    return [
                { 
                    url: "/r/Jokes/",
                    title: "Jokes",
                    description: "The funniest sub on reddit. Hundreds of jokes posted each day, and some of them aren't even reposts! FarCraft",
                    icon_img: "https://a.thumbs.redditmedia.com/LOGcHho3SytZ8S-j14V4BF2HwFpZYwF9iRjIsoPYkm4.png"
                },
                {
                    url: "/r/pics/",
                    title: "pics",
                    description: "I bet you can figure it out by reading the name of the subreddit",
                    icon_img: "https://b.thumbs.redditmedia.com/ht_CCiUxSIIWKgeb8CERzESKm4GOETQB9JslGV1in0s.png"
                }
            ]   
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