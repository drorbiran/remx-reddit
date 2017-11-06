import React, { PureComponent } from 'react'
import { FlatList } from 'react-native';
import { Text, Colors, View, LoaderScreen } from 'react-native-ui-lib'
import { connect } from 'remx';

import * as store from '../stores/posts/postsStore';
import * as actions from '../stores/posts/postsActions';


class PostsList extends PureComponent {

  componentWillMount() {
    actions.fetchPosts();
  }

  _renderLoader() {
    const isLoading = this.props.isLoading;
    if (isLoading) {
      return <LoaderScreen
          loaderColor = {Colors.blue30}
          message = "Loading Posts"
        />
    }
  }

  _renderPostsList() {
    return <Text>{JSON.stringify(this.props.posts)}</Text>
  }
    
  render() {
        return (
          <View flex>
            {this._renderLoader()}
            {this._renderPostsList()}  
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