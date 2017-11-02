import React, { PureComponent } from 'react'
import {FlatList, TouchableOpacity} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib'
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
            return <Text>Loading</Text>
        }
    }
 
    renderList= () => {        
        if(!this.props.isLoading) {
            console.log('renderlist');        
            return (   
                <View>
                    <Text blue50 text20 center>Welcome</Text>
                    <Text>
                        {JSON.stringify(this.props.topics)}
                    </Text>
                    <View center marginT-100>
                        <Button text70 white label="Push Screen"
                        onPress={this.pushScreen.bind(this)}
                        />
                    </View>
                </View>               
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
            <View flex paddingH-25 paddingT-120>
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