import * as remx from 'remx';

const initialState = {
    loading: true,
    topics: [],
    //This is how the topic structure will look like 
    // [
    //     { 
    //         url: "/r/Jokes/",
    //         title: "Jokes",
    //         description: "The funniest sub on reddit. Hundreds of jokes posted each day, and some of them aren't even reposts! FarCraft",
    //         icon_img: "https://a.thumbs.redditmedia.com/LOGcHho3SytZ8S-j14V4BF2HwFpZYwF9iRjIsoPYkm4.png"
    //     },
    //     {
    //         url: "/r/pics/",
    //         title: "pics",
    //         description: "I bet you can figure it out by reading the name of the subreddit"
    //         icon_img: "https://b.thumbs.redditmedia.com/ht_CCiUxSIIWKgeb8CERzESKm4GOETQB9JslGV1in0s.png"
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

    getTopics(){
        return state.topics;
    },

});

//#####################################
// setters
// All the functions that are going to change parts of the state should be wrapped within the Setters function. 
// The warpped setters functions shoud be defined inside the store and should be exported.
//#####################################
export const setters = remx.setters({

    setTopics(topics){
      state.topics = topics;
      state.loading = false;
    }

});