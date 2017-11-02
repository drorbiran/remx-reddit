import * as remx from 'remx';

const initialState = {
    loading: true,
    topics: [],
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
    },

    setLoading(isLoading) {
        state.loading = isLoading;
    },

});