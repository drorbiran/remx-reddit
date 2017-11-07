import React, { PureComponent } from 'react'
import { FlatList, Linking } from 'react-native';
import { Text, Colors, View, LoaderScreen, Card } from 'react-native-ui-lib'
import { connect } from 'remx';

import * as store from '../stores/posts/postsStore';
import * as actions from '../stores/posts/postsActions';


class PostsList extends PureComponent {

  componentWillMount() {
    const url = this.props.url;
    actions.fetchPosts(`https://www.reddit.com${url}hot.json`);
  }

  renderPostsList() {
    const { isLoading, posts } = this.props;
    return (   
        <FlatList
            data={posts}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />             
    );
  }

  _keyExtractor = (item) => item.url;

  _renderItem = ({item}) => {
    return (
      <Card
        containerStyle={{marginTop: 12}}
        onPress={() => Linking.openURL(item.url)}
      >
        <Card.Section body>
            <Card.Item>
                <Text text50>{item.title}</Text>
            </Card.Item>
        </Card.Section> 
        <Card.Section body>
          <Card.Item>
                  <Text text70>Score: {item.score}</Text>
          </Card.Item>     
        </Card.Section>
  </Card>    
    )
  }

  renderLoader() {
    return <LoaderScreen
        loaderColor={Colors.blue30}
        message="Loading Posts"
    />
}
    
  render() {
        return (
          <View flex>
            {(this.props.isLoading)?
              this.renderLoader() :
              this.renderPostsList()
            }
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