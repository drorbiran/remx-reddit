import React, { PureComponent } from 'react'
import {FlatList, TouchableOpacity} from 'react-native';
import {Colors, View, Text, Button, LoaderScreen} from 'react-native-ui-lib'
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
            <TouchableOpacity>
                <Text>
                    {item.title}
                </Text>
            </TouchableOpacity>
        )
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