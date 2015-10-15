/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Map = require('react-native-tencent-map');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

var demo = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Map
                    style={styles.mapWrapper}
                    ></Map>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapWrapper: {
        width: 400,
        height: 400
    }
});

AppRegistry.registerComponent('demo', () => demo);
