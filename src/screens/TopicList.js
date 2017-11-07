import React, { PureComponent } from 'react'
import {FlatList, TouchableOpacity} from 'react-native';
import {Colors, View, Text, Button, Card, LoaderScreen, ListItem} from 'react-native-ui-lib'
import { connect } from 'remx';

import * as store from '../stores/topics/topicsStore';
import * as actions from '../stores/topics/topicsActions';

class TopicsList extends PureComponent {

    componentWillMount(){
        actions.fetchTopics();
    }

    renderLoader() {
        if (this.props.isLoading) {
            console.log('render loader');
            return <LoaderScreen
                loaderColor={Colors.blue30}
                message="Loading Topics"
            />
        }
    }

    _keyExtractor = (item) => item.url;
    
    _renderItem = ({item}) => {
        return (
            <Card
                row
                containerStyle={{margin: 12}}
                onPress={() => this._showPostsScreen(item)}
            >
                <Card.Image
                    imageSource={{uri: item.icon_img}}
                    width={96}
                />
                <Card.Section body>
                    <Card.Item>
                        <Text text50 red10>{item.title}</Text>
                    </Card.Item>
                    <Card.Item>
                        <Text text70>{this._trimText(item.description)}</Text>
                    </Card.Item>
                </Card.Section>      
            </Card>
        )
    };

    _trimText = (text) => (text.length > 60)? text.substring(0, 60) + "..." : text

    _showPostsScreen = (topic) => {
        console.log("topic: ", topic);
        const {title,url} = topic;
        this.props.navigator.push({
            screen: 'remxReddit.PostsList',
            title: title,
            passProps: {url}
        })
    };

    renderList= () => {        
        if(!this.props.isLoading) {
            return (   
                <FlatList
                    data={this.props.topics}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />             
            );
        }
    }

    pushScreen = () => {
        this.props.navigator.push({
            screen: 'bootstrap.Screen1',
            title: 'Screen1',
            passProps: {someProp: "someProp"}
        })
    };

    render() {
        return (
            <View flex>
                {this.renderLoader()}
                {this.renderList()}
            </View>
        );
    }
}

function mapStateToProps() {
    return {
        isLoading: store.getters.isLoading(),
        topics: store.getters.getTopics()
    };
}

export default connect(mapStateToProps)(TopicsList);