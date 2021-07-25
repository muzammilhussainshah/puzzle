import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    AppRegistry,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Dimensions } from 'react-native'
import Carousel from 'react-native-carousel-view';
import Orientation from 'react-native-orientation-locker';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Starting from '../container/test';
// import Click from '../container/test';
import Click from '../container/test';


class SplashScreen extends Component {


    _onOrientationDidChange = (orientation) => {
        if (orientation == 'LANDSCAPE-LEFT') {
        } else {
        }
    };
    componentWillMount() {

        // this.click()
        // Click.play()
        // Click.setVolume(0.5);


    }
    componentDidMount() {

        Click.play()
        Click.setVolume(0.5);


        // this.click()
        Orientation.getAutoRotateState((rotationLock) => this.setState({ rotationLock }));
        Orientation.lockToLandscape();
        // let {width, height} = Dimensions.get('window')
        // console.log(width, height,"66666665aaaaaaaaaaa")
        Orientation.addOrientationListener(this._onOrientationDidChange);
        setTimeout(() => {
            this.props.navigation.navigate("gameCatogery");
            // Click.play()
            // Click.setVolume(0.5);
        }, 2000);
    }
    componentWillUnmount() {
        Orientation.removeOrientationListener(this._onOrientationDidChange);
    }
    // click = () => {

    //     Click.setVolume(1);
    //     Click.play((success) => {
    //         if (success) {
    //             console.log('successfully finished playing');
    //         } else {
    //             console.log('playback failed due to audio decoding errors');
    //             // reset the player to its uninitialized state (android only)
    //             // this is the only option to recover after an error occured and use the player again
    //             Click.reset();
    //         }
    //     })
    // }
    render() {
        // images4MathsClone.push(true)
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={
                    require("../assets/images/splashscreen.jpg")
                }
                style={{ width: '100%', height: '100%' }}>

            </ImageBackground>
        );
    }
}


export default (SplashScreen);




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
AppRegistry.registerComponent('SplashScreen', () => SplashScreen);