import * as remx from 'remx';

const initialState = {
    loading: true,
    posts: [],
    //This is how the posts structure will look like 
    // [
    //     { 
    //         url: "https://www.reddit.com/r/Jokes/comments/7b4d2i/a_teenage_boy_was_delivering_papers_to_an/",
    //         title: "A teenage boy was delivering papers to an apartment house.",
    //         Score: 12716
    //     },
    //     {
    //         url: "https://www.reddit.com/r/Jokes/comments/7b1fe6/i_told_a_girl_you_look_great_without_glasses/",
    //         title: "I told a girl, "you look great without glasses",
    //         score: 11259
    //     }
    // ] 
};

const state = remx.state(initialState);

//#####################################
// getters
// All the functions that are going to return parts of the state should be wrapped within the Getters function.
// The warpped getters functions shoud be defined inside the same store file and should be exported.
//#####################################

export const getters = remx.getters({

    isLoading() {
        return state.loading;
    },

    getPosts(){
        return state.posts;
    },

});

//#####################################
// setters
// All the functions that are going to change parts of the state should be wrapped within the Setters function. 
// The warpped setters functions shoud be defined inside the store and should be exported.
//#####################################
export const setters = remx.setters({

    setPosts(posts){
      state.posts = posts;
      state.loading = false;
    }

});