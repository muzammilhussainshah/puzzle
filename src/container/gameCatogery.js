import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    AppRegistry,
    ImageBackground,
    TouchableOpacity,
    BackHandler,
} from 'react-native';
import { Dimensions } from 'react-native'
// import Carousel from 'react-native-carousel-view';
import Orientation from 'react-native-orientation-locker';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Starting } from '../container/test';
import Click from '../container/test';

// import Starting from '../container/test';

const { width, height } = Dimensions.get('window');
class GameCatogery extends Component {

    constructor(props) {
        super(props)
        let { width, height } = Dimensions.get('window')
        console.log(width, height, "66666665")
        this.state = {
            sound: true,
            size: { width, height },
        };
    }
    _onOrientationDidChange = (orientation) => {
        if (orientation == 'LANDSCAPE-LEFT') {
        } else {
        }
    };
    componentWillMount() {


    }
    componentDidMount() {
        // Click.play()
        // Click.setVolume(0.5);




        Orientation.getAutoRotateState((rotationLock) => this.setState({ rotationLock }));
        Orientation.lockToLandscape();
        // let {width, height} = Dimensions.get('window')
        // console.log(width, height,"66666665aaaaaaaaaaa")
        Orientation.addOrientationListener(this._onOrientationDidChange);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
        Orientation.removeOrientationListener(this._onOrientationDidChange);
    }
    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
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
    starting = () => {

        Starting.setVolume(1);
        Starting.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                // reset the player to its uninitialized state (android only)
                // this is the only option to recover after an error occured and use the player again
                Starting.reset();
            }
        })
    }



    render() {
        console.log(this.props.images4Fruites, "isLoader")
        let images4FruitesClone = this.props.images4Fruites
        images4FruitesClone.splice(5, 1, this.state.sound)
        let images4AbcdClone = this.props.images4Abcd
        images4AbcdClone.splice(5, 1, this.state.sound)
        let images4MathsClone = this.props.images4Maths
        images4MathsClone.splice(5, 1, this.state.sound)
        let images4AnimalsClone = this.props.images4Animals
        images4AnimalsClone.splice(5, 1, this.state.sound)
        let images4CountingClone = this.props.images4Counting
        images4CountingClone.splice(5, 1, this.state.sound)
        let images4SmallabcdClone = this.props.images4Smallabcd
        images4SmallabcdClone.splice(5, 1, this.state.sound)
        let images4CartoonsClone = this.props.images4Cartoons
        images4CartoonsClone.splice(5, 1, this.state.sound)
        let images4ElectronicsClone = this.props.images4Electronics
        images4ElectronicsClone.splice(5, 1, this.state.sound)
        let images4StationaryClone = this.props.images4Stationary
        images4StationaryClone.splice(5, 1, this.state.sound)

        // images4MathsClone.push(true)
        return (
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                source={
                    require("../assets/images/wood1.jpg")
                }
                style={{ width: '100%', height: '100%' }}>

                <View style={styles.rateImage}>
                    <Animatable.Image animation="jello" iterationCount="infinite" duration={5000}
                        style={{ width: "45%", height: "45%", marginVertical: "3%" }}
                        source={require("../../android/app/src/main/res/mipmap-hdpi/ic_launcher.png")}
                    />
                    <Animatable.Image animation="jello" iterationCount="infinite" duration={5000}
                        style={{ width: "55%", height: "25%", marginVertical: "-5%" }}
                        source={require("../assets/images/playstore.png")}
                    />
                </View>
                <View
                    style={[styles.rateImage, { right: 0 }]}
                >
                    <Animatable.Image animation="jello" iterationCount="infinite" duration={5000}
                        style={{ width: "75%", height: "67%", marginVertical: "-5%" }}
                        source={require("../assets/images/moreapps.png")}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {

                        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
                    }}
                    style={[styles.rateImage, { bottom: 0 }]}>
                    {/* <Animatable.Image animation="jello" iterationCount="infinite" duration={5000}
                        style={{ width: "75%", height: "67%", marginVertical: "-5%" }}
                        source={require("../assets/images/quite.png")}
                    /> */}
                    <Animatable.View animation="jello" iterationCount="infinite" duration={5000}
                    >
                        <Icon name="exit-to-app" style={{ fontSize: 48, marginVertical: "15%", color: "#8f0101" }} />
                    </Animatable.View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            sound: !this.state.sound
                        })
                    }}

                    style={[styles.rateImage, { width: "8%", bottom: "-2%", right: "2%" }]}>

                    {(this.state.sound === true) ? (
                        <Animatable.Image animation="jello" iterationCount="infinite" duration={5000}
                            style={{ width: "100%", height: "67%", marginVertical: "-5%" }}
                            source={require("../assets/images/volume.png")}
                        />
                    ) : (
                            <Animatable.Image animation="jello" iterationCount="infinite" duration={5000}
                                style={{ width: "110%", height: "67%", marginVertical: "-5%" }}
                                source={require("../assets/images/volume1.png")}
                            />
                        )}

                </TouchableOpacity>
                <View style={styles.container}>
                    <Carousel
                        sound={this.state.sound}
                        delay={2000}
                        style={this.state.size}
                        autoplay={false}
                        pageInfo
                        isLooped={false}
                        leftArrowText={'⇦'}
                        leftArrowStyle={{
                            fontSize: 100, margin: 20, color: '#ead2ba',
                            textShadowOffset: { width: 2, height: 2 },
                            textShadowRadius: 1,
                            textShadowColor: '#000',
                        }}
                        rightArrowText={'⇨'}
                        rightArrowStyle={{
                            fontSize: 100, margin: 20, color: '#ead2ba',
                            textShadowOffset: { width: 2, height: 2 },
                            textShadowRadius: 1,
                            textShadowColor: '#000',
                        }}
                        arrows


                        onAnimateNextPage={(p) => (p)}
                    >



                        <TouchableOpacity style={styles.contentContainer}
                            // style={{backgroundColor:"black"}}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                // setTimeout(() => {

                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4FruitesClone),
                                }
                                )
                                // }, 500)
                            }

                            }
                        >

                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}
                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/fruits.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {

                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4AbcdClone),
                                })
                            }

                            }
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/abcd.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4SmallabcdClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/smallabcd/smallabcd.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4MathsClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/maths/maths.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            // style={{backgroundColor:"black"}}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4AnimalsClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/animals/animals.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4CountingClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/counting/counting.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4CartoonsClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/cartoons/cartoons.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4ElectronicsClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/electronics/electronics.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contentContainer}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.state.sound === true ? (
                                    this.starting()

                                ) : (null)
                                this.props.navigation.navigate("startGame", {
                                    imagesForCatogery: JSON.stringify(images4StationaryClone),
                                }
                                )
                            }}
                        >
                            <Animatable.Image
                                animation="bounce" iterationCount="infinite" duration={5000}

                                style={{ width: "70%", height: "65%" }}
                                source={require("../assets/images/stationary/stationary.png")}
                            />
                        </TouchableOpacity>

                    </Carousel>
                </View>
            </ImageBackground >
        );
    }
}
function mapStateToProp(state) {
    return ({
        images4Fruites: state.root.imagesForFruits,
        images4Abcd: state.root.imagesForAbcd,
        images4Maths: state.root.imagesForMaths,
        images4Animals: state.root.imagesForAnimals,
        images4Counting: state.root.imagesForCounting,
        images4Smallabcd: state.root.imagesForSmallabcd,
        images4Cartoons: state.root.imagesForCartoons,
        images4Electronics: state.root.imagesForElectronics,
        images4Stationary: state.root.imagesForStationary,
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        login: (userCredentials, navigation) => {
            dispatch(login(userCredentials, navigation));
        },
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(GameCatogery);




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rateImage: {
        justifyContent: "center",
        alignItems: "center",
        width: "14%", height: "25%",
        zIndex: 1, position: "absolute",

    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:"red"
    },
});
AppRegistry.registerComponent('GameCatogery', () => GameCatogery);