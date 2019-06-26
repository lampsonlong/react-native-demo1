import {connect} from 'react-redux';
import React from 'react';
import {View, Text} from 'react-native';

class Tabs4Page extends React.Component {
    /*-----Data Part-----*/
    title = 'Tabs4 Page';

    /*-----Constructor Part-----*/
    /*-----Lifecycle Part-----*/
    /*-----Methods Part-----*/

    /*-----Render Part-----*/
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.title}</Text>
            </View>
        );
    }
}

/*-----Style Part-----*/

/*-----Redux Part-----*/
export default connect(null, null)(Tabs4Page);