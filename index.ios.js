var React = require('react-native');


var { requireNativeComponent,
    Component,
    PropTypes,
    DeviceEventEmitter,
    Dimensions} = React;

var {width,height} = Dimensions.get('window');

class MapView extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }


    componentWillMount() {
        this.onRegionChangeListener = DeviceEventEmitter.addListener('RegionChange', this._onChange);
    }


    componentWillUnmount() {
        this.onRegionChangeListener.remove();
    }


    _onChange(event:Event) {
        this.props.onRegionChange && this.props.onRegionChange(event)
    }


    render() {
        return (
            <RNTencentMap
                {...this.props}
                onChange={this._onChange}
                style={{
                    width:width,
                    height:height
                }}
                ></RNTencentMap>
        );
    }
}


MapView.propTypes = {
    onRegionChange: PropTypes.func,
    frame: React.PropTypes.shape({
        floatX: PropTypes.number.required,
        floatY: PropTypes.number.required,
        width: PropTypes.number.required,
        height: PropTypes.number.required
    }),
    zoomEnabled: PropTypes.bool,
    hidden: PropTypes.bool,
    scrollEnabled: PropTypes.bool,
    showsUserLocation: PropTypes.bool,
    multipleTouchEnabled: PropTypes.bool,
    userTrackingMode: PropTypes.number
};


MapView.defaultProps = {
    zoomEnabled: true,
    hidden: false,
    scrollEnabled: true,
    showsUserLocation: true,
    multipleTouchEnabled: true,
    userTrackingMode: 1
    //frame: Dimensions.get('window')
};


var RNTencentMap = requireNativeComponent('RNTencentMap', MapView);


module.exports = MapView;