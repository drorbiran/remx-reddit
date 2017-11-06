import React, { PureComponent } from 'react'
import {View, Text} from 'react-native';
import { connect } from 'remx';

import * as store from '../stores/posts/postsStore';
import * as actions from '../stores/posts/postsActions';


class PostsList extends PureComponent {

  componentWillMount() {
    actions.fetchPosts();
  }
    
  render() {
        return (
            <View style={styles.container}>
            <Text style={styles.instructions}>
              {JSON.stringify(this.props.posts)}
            </Text>
          </View>
        );
    }
}

const styles ={
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  };

function mapStateToProps() {
    return {
        isLoading: store.getters.isLoading(),
        posts: store.getters.getPosts()
    };
}

export default connect(mapStateToProps)(PostsList);