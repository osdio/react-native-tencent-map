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
    Dimensions,
    StatusBarIOS,
    Component,
    TouchableOpacity
    } = React;


var {width,height} = Dimensions.get('window');


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {}
        }

        StatusBarIOS.setHidden(true);
    }


    _onRegionChanged(event) {
        let region = event.nativeEvent && event.nativeEvent.region;
        this.setState({
            region: region
        });
    }


    _renderRegion() {
        let region = this.state.region;
        let keys = Object.keys(region);
        return keys.map((key)=> {
            return (
                <View style={styles.regionItem}>
                    <Text style={styles.regionItemKey}>{key + ': '}</Text>
                    <Text style={styles.regionItemValue}>{region[key]}</Text>
                </View>
            )
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <Map
                    onRegionChanged={this._onRegionChanged.bind(this)}
                    style={styles.mapWrapper}
                    ></Map>

                <View style={styles.toolWrapper}>
                    <Text style={styles.regionTitle}>地图数据:</Text>
                    <View style={styles.regionContent}>
                        {this._renderRegion()}
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapWrapper: {
        width: width,
        height: height / 2
    },
    toolWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    regionTitle: {
        fontSize: 20,
        marginBottom: 20
    },
    regionItem: {
        flex: 1,
        flexDirection: 'row',
        width: width
    },
    regionItemKey: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 20
    },
    regionItemValue: {
        flex: 1
    },
    regionContent: {
        height: 80
    }
});

AppRegistry.registerComponent('demo', () => Demo);
