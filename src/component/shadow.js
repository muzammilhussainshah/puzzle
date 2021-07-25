import React, { PureComponent, Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    View,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import Click from '../container/test';

class Shadow extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            width: 120,
            counter: 0,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.flag3 === true) {
            this.setState({
                count: undefined
            })
            this.animatedShadow()
        }
    }
    image2(image, time) {
        if (this.props.catogeryName === "maths") {
            return (
                <Animatable.Image animation="zoomIn" duration={2000}
                    style={{ width: 150, height: 150, marginVertical: "5%" }}
                    source={image}
                />
            )
        }
        else {
            return (
                <Animatable.Image animation="zoomIn" duration={2000}
                    style={{ width: 100, height: 100, marginVertical: "5%" }}
                    source={image}
                />
            )
        }
    }
    animatedShadow() {
        const { counter } = this.state
        var count = 0;
        var interval = setInterval(() => {
            this.setState({
                counter: counter + 1,
                count
            }, () => {
                if (count < 4) {
                    count = count + 1;
                }
                console.log("rendrrrrr", count)
            }
            )
            if (count > 3) {
                console.log("iffffffffffff")
                clearInterval(interval)
            }
        }, 250);

    }
    componentDidMount() {
        this.animatedShadow()
    }
    click = () => {

        Click.setVolume(1);
        Click.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                // reset the player to its uninitialized state (android only)
                // this is the only option to recover after an error occured and use the player again
                Click.reset();
            }
        })
    }
    render() {
        const navigation = this.props.navigation
        const that = this
        const { counter, count } = this.state
        const { ShadowOne, ShadowTwo, ShadowThree, ShadowFour } = this.props
        console.log(ShadowOne, ShadowTwo, ShadowThree, ShadowFour, "555555555")
        return (
            <ImageBackground
                source={
                    // {uri:"http://wallpapers.ae/wp-content/uploads/2016/02/Most-Beautiful-High-Definition-3D-HD-Wallpaper.jpg"}
                    require("../assets/images/wood1.jpg")
                }
                style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableOpacity
                        style={{ flex: 0.2, justifyContent: "flex-end", alignItems: "center", }}
                        onPress={() => {
                            console.log(this.props.sound,"this.props.sound")
                            this.props.sound===true?(
                                this.click()
                            ):(null)
                           
                            this.props.navigation.goBack() }}
                    >
                        <Animatable.View animation="pulse" duration={6000} iterationCount="infinite"
                        >
                            <Icon name="home" style={{ fontSize: 50, marginVertical: "15%", color: "black" }} />
                        </Animatable.View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 0.5, }}>
                            <View style={{ width: "50%", height: (this.props.catogeryName) ? ("90%") : ("80%"), justifyContent: "center", alignItems: "center", }}>
                                {
                                    count >= 0 &&
                                    this.image2(this.props.ShadowOne, 2000)
                                }
                            </View>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: "flex-end", }}>
                            <View style={{ width: "50%", height: (this.props.catogeryName) ? ("90%") : ("80%"), justifyContent: "center", alignItems: "center" }}>
                                {
                                    count >= 1 &&
                                    this.image2(this.props.ShadowTwo, 4000)
                                }
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 0.5, }}>
                            <View style={{ marginLeft: "50%", height: (this.props.catogeryName) ? ("90%") : ("80%"), justifyContent: "center", alignItems: "center", }}>
                                {
                                    count >= 2 &&
                                    this.image2(this.props.ShadowThree, 6000)
                                }
                            </View>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: "flex-end", }}>
                            <View style={{ marginLeft: "50%", height: (this.props.catogeryName) ? ("90%") : ("80%"), justifyContent: "center", alignItems: "center" }}>
                                {
                                    count >= 3 &&
                                    this.image2(this.props.ShadowFour, 8000)
                                }
                            </View>
                        </View>
                    </View>

                </View>
            </ImageBackground >
        );
    }
}
export default withNavigation(Shadow);
AppRegistry.registerComponent('Shadow', () => Shadow);







