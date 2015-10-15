var React = require('react-native');
var Dimensions = require('Dimensions')


var { requireNativeComponent,
    Component,
    PropTypes,
    DeviceEventEmitter} = React;


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
                size={{
                     floatX:0,
                     floatY:0,
                     width:300,
                     height:300
                }}
                onChange={this._onChange}
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
    multipleTouchEnabled: PropTypes.bool
};


MapView.defaultProps = {
    zoomEnabled: true,
    hidden: false,
    scrollEnabled: true,
    showsUserLocation: true,
    multipleTouchEnabled: true,
    frame: Dimensions.get('window')
};


var RNTencentMap = requireNativeComponent('RNTencentMap', MapView);


module.exports = MapView;