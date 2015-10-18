var React = require('react-native');


var {
    requireNativeComponent,
    Component,
    PropTypes,
    DeviceEventEmitter,
    Dimensions,
    StyleSheet
    } = React;

var {width,height} = Dimensions.get('window');

class MapView extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.count = 0;
    }

    _onChange(event:Event) {
        console.log(this.count++);
        console.log(event.type);
        if (event.type == 'regionDidChangeAnimated') {
            this.props.onRegionChanged && this.props.onRegionChanged(event);
        }

    }


    render() {
        return (
            <RNTencentMap
                {...this.props}
                onChange={this._onChange}
                style={[styles.baseMapStyle, this.props.style]}
                ></RNTencentMap>
        );
    }
}


MapView.propTypes = {
    onRegionChanged: PropTypes.func,

    zoomEnabled: PropTypes.bool,
    hidden: PropTypes.bool,
    scrollEnabled: PropTypes.bool,
    showsUserLocation: PropTypes.bool,
    multipleTouchEnabled: PropTypes.bool,
    showsScale: PropTypes.bool,
    showTraffic: PropTypes.bool,

    userTrackingMode: PropTypes.number
};


MapView.defaultProps = {
    zoomEnabled: true,
    hidden: false,
    scrollEnabled: true,
    showsUserLocation: true,
    multipleTouchEnabled: true,
    showsScale: false,
    showTraffic: true,

    userTrackingMode: 1
};


var RNTencentMap = requireNativeComponent('RNTencentMap', MapView);


var styles = StyleSheet.create({
    baseMapStyle: {
        width: width,
        height: height
    }
});


module.exports = MapView;