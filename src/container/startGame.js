import React, { PureComponent, Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    AppState
} from 'react-native';
import Draggable from 'react-native-draggable';
import Orientation from 'react-native-orientation-locker';
import Shadow from '../component/shadow';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Click from '../container/test';
import { Starting } from '../container/test';
import { Winning } from '../container/test';
import { Background } from '../container/test';

class StartGame extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            renderSize: 100,
            marginTop: 100,
            marginLeft: 100,
            reverseFlag: true,
            countForMainArr: 2,
            autoForMainArr: 0,
            autoForChildArr: 0,
            imagesCloneForDrag: [],
            shade: 1,
            shade1: 1,
            shade2: 1,
            shade3: 1,
            flag: true,
            flag1: true,
            flag3: false,
            shadowArr: 0,
            gif: false,

            images: []
        }

    }
    infiniteClick = () => {
        Background.setVolume(0.8);
        Background.setNumberOfLoops(-1);
        // if (play === true) {
        Background.play()
        // } else {
        //     Background.stop()
        // }
    }

    componentWillMount() {
        let { width, height } = Dimensions.get('window')
        this.setState({
            resolutionWidth: width,
            resolutionHeight: height,
        })
        console.log(width, height, "saaaaaaaaaaaaaa")


        let images4Catogery = this.props.navigation.getParam('imagesForCatogery');
        images4Catogery = JSON.parse(images4Catogery);
        console.log(images4Catogery, images4Catogery[3], "***********************", images4Catogery[4], "***********************", images4Catogery[0][0].image)
        this.setState({
            images: images4Catogery,
            catogeryName: images4Catogery[3],
            imagesLimit: images4Catogery[4],
            sound: images4Catogery[5]
        }, () => {
            console.log(this.state.images, this.state.catogeryName, this.state.imagesLimit, "///////////")
            let shadowArr = []
            let randomForShadow1 = Math.floor(Math.random() * this.state.imagesLimit)
            shadowArr.push(randomForShadow1)
            let randomForShadow2 = Math.floor(Math.random() * this.state.imagesLimit)
            randomForShadow2 = this.randomAgain(randomForShadow2, shadowArr, this.state.imagesLimit)
            shadowArr.push(randomForShadow2)
            let randomForShadow3 = Math.floor(Math.random() * this.state.imagesLimit)
            randomForShadow3 = this.randomAgain(randomForShadow3, shadowArr, this.state.imagesLimit)
            shadowArr.push(randomForShadow3)
            let randomForShadow4 = Math.floor(Math.random() * this.state.imagesLimit)
            randomForShadow4 = this.randomAgain(randomForShadow4, shadowArr, this.state.imagesLimit)
            shadowArr.push(randomForShadow4)
            console.log(shadowArr, randomForShadow1, randomForShadow2, randomForShadow3, randomForShadow4, "////////////////")
            let randomDragImageArr = []
            let randomDragImage = Math.floor(Math.random() * 4)
            randomDragImageArr.push(randomDragImage)
            console.log(randomDragImage, "randomDragImage")
            this.setState({
                shadowArr: shadowArr,
                randomDragImage: randomDragImage,
                randomDragImageArr: randomDragImageArr
            })
        }
        )
    }
    randomAgain(randomNum, array, multiply) {
        console.log("chaluuuuuu", randomNum, array)
        // let flag1 = true

        if (array.indexOf(randomNum) !== -1) {
            let rndnum = Math.floor(Math.random() * multiply)
            return this.randomAgain(rndnum, array, multiply)
            // flag1= false
        }
        else {
            return randomNum
        }
    }
    _onOrientationDidChange = (orientation) => {
        if (orientation == 'LANDSCAPE-LEFT') {


        } else {
        }
    };
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'active' && this.state.sound === true) {
            console.log('App has come to the foreground!');
            this.infiniteClick()

        }
        else {
            console.log('App has come to the background!');
            Background.stop()
        }
        // this.setState({ appState: nextAppState });
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);

        if (this.state.sound === true) {

            this.infiniteClick()
        }


        Orientation.getAutoRotateState((rotationLock) => this.setState({ rotationLock }));
        Orientation.lockToLandscape();
        Orientation.addOrientationListener(this._onOrientationDidChange);
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        Background.stop()

        Orientation.removeOrientationListener(this._onOrientationDidChange);
    }
    randomNumberForShadow() {
        console.log("randomNumberForDrag")
        let indexForMain = this.state.indexForMain
        let autoForMainArr = Math.floor(Math.random() * 2)
        let flag2 = true
        for (var i = 0; i < indexForMain.length; i++) {
            console.log(autoForMainArr, "autoForMainArr", indexForMain)
            if (autoForMainArr === indexForMain[i]) {
                flag2 = false
                console.log("matchedagain autoForMainArr")
                this.randomNumberForShadow()
                break;
            }
            else {
                flag2 = true
            }
        }
        if (flag2 === true) {
            indexForMain.push(autoForMainArr)
            let imagesCloneForDrag = this.state.images[autoForMainArr].slice(0)
            let renderDragImage = imagesCloneForDrag[this.state.autoForChildArr].image
            this.setState({
                renderDragImage: renderDragImage,
                autoForMainArr: autoForMainArr,
                indexForMain: indexForMain,
            })
        }
    }
    //     randomNumberForDrag() {
    //         console.log("randomNumberForDrag")
    //         let indexForChild = this.state.indexForChild
    //         let autoForChildArr = Math.floor(Math.random() * 4)
    //         let flag2 = true
    //         for (var i = 0; i < indexForChild.length; i++) {
    //             console.log(autoForChildArr, "autoForChildArr", indexForChild)
    //    if (autoForChildArr === indexForChild[i]) {
    //                 flag2 = false
    //                 console.log("matchedagain autoForChildArr")
    //                 this.randomNumberForDrag()
    //                 break;
    //             }
    //             else {
    //                 flag2 = true
    //             }
    //         }
    //         if (flag2 === true) {
    //             indexForChild.push(autoForChildArr)
    //             let imagesCloneForDrag = this.state.images[this.state.autoForMainArr].slice(0)
    //             let renderDragImage = imagesCloneForDrag[autoForChildArr].image
    //             this.setState({
    //                 indexForChild: indexForChild,
    //                 renderDragImage: renderDragImage,
    //                 autoForChildArr: autoForChildArr,
    //             })
    //         }
    //     }
    gif() {
        setTimeout(() => {
            this.setState({
                gif: true
            })
        }, 500)
    }


    // (this.state.randomDragImage === 0 && XInPerctentage < 30 && XInPerctentage > 15 && YInPerctentage < this.state.catogeryName === "maths" ? 38 : 30) ||
    // (this.state.randomDragImage === 1 && XInPerctentage < 25 && XInPerctentage > 15 && YInPerctentage > this.state.catogeryName === "maths"?80: 65) ||
    // (this.state.randomDragImage === 2 && XInPerctentage > 85 && YInPerctentage <  this.state.catogeryName === "maths"?38:30) ||
    // (this.state.randomDragImage === 3 && XInPerctentage > 85 && YInPerctentage >  this.state.catogeryName === "maths"?80:65)
    locationFuncSeprate() {
        console.log("matched", "iffffffffffff")
        if (this.state.sound === true) {
            Click.play()
            Click.setVolume(0.5);
        }


        let randomDragImageArr = this.state.randomDragImageArr
        if (randomDragImageArr.length > 3) {
            if (this.state.sound === true) {
                setTimeout(() => {
                    Winning.play()
                    Winning.setVolume(0.5);
                }, 500)

                Click.play()
                Click.setVolume(0.5);
            }

            this.gif(this)
            this.setState({
                renderSize: 100,
                flag: false,
                flag1: false,
            })
            if (this.state.randomDragImage === 0) {
                this.setState({
                    shade: 0
                })
            }
            else if (this.state.randomDragImage === 1) {
                this.setState({
                    shade1: 0
                })
            }
            else if (this.state.randomDragImage === 2) {
                this.setState({
                    shade2: 0
                })
            }
            else if (this.state.randomDragImage === 3) {
                this.setState({
                    shade3: 0
                })
            }
            setTimeout(() => {
                console.log(randomDragImageArr, "randomDragImageArr///////////")
                let shadowArr = []
                let randomForShadow1 = Math.floor(Math.random() * this.state.imagesLimit)
                shadowArr.push(randomForShadow1)
                let randomForShadow2 = Math.floor(Math.random() * this.state.imagesLimit)
                randomForShadow2 = this.randomAgain(randomForShadow2, shadowArr, this.state.imagesLimit)
                shadowArr.push(randomForShadow2)
                let randomForShadow3 = Math.floor(Math.random() * this.state.imagesLimit)
                randomForShadow3 = this.randomAgain(randomForShadow3, shadowArr, this.state.imagesLimit)
                shadowArr.push(randomForShadow3)
                let randomForShadow4 = Math.floor(Math.random() * this.state.imagesLimit)
                randomForShadow4 = this.randomAgain(randomForShadow4, shadowArr, this.state.imagesLimit)
                shadowArr.push(randomForShadow4)
                console.log(shadowArr, randomForShadow1, randomForShadow2, randomForShadow3, randomForShadow4, "////////////////")
                let randomDragImageArrClone = []
                let randomDragImage = Math.floor(Math.random() * 4)
                randomDragImageArrClone.push(randomDragImage)
                this.setState({
                    shadowArr: shadowArr,
                    randomDragImage: randomDragImage,
                    randomDragImageArr: randomDragImageArrClone,
                    flag: true,
                    flag1: true,
                    shade: 1,
                    shade1: 1,
                    shade2: 1,
                    shade3: 1,
                    flag3: true,
                })
            }, 500);
        }
        else {

            this.setState({
                renderSize: 100,
                flag: false,
                gif: false
            })
            console.log("elseeeeeeeee")
            if (this.state.randomDragImage === 0) {
                this.setState({
                    shade: 0
                })
            }
            else if (this.state.randomDragImage === 1) {
                this.setState({
                    shade1: 0
                })
            }
            else if (this.state.randomDragImage === 2) {
                this.setState({
                    shade2: 0
                })
            }
            else if (this.state.randomDragImage === 3) {
                this.setState({
                    shade3: 0
                })
            }
            let randomDragImage = Math.floor(Math.random() * 4)
            randomDragImage = this.randomAgain(randomDragImage, randomDragImageArr, 4)
            randomDragImageArr.push(randomDragImage)
            console.log(randomDragImage, "randomDragImage")
            this.setState({
                randomDragImage: randomDragImage,
                randomDragImageArr: randomDragImageArr,
            })
        }

    }
    onLocationChange(X, Y, gestureState, ) {
        if (this.state.catogeryName === "maths") {
            this.setState({
                renderSize: 70
            }, () => {
                console.log(this.state.renderSize, "ssssssssssss")
            })

        }


        let XInPerctentage = X / this.state.resolutionWidth * 100
        let YInPerctentage = Y / this.state.resolutionHeight * 100
        console.log(XInPerctentage, YInPerctentage, X, Y, gestureState, ".................s..............")
        if (
            (
                (this.state.catogeryName === "maths")
                &&
                (
                    (this.state.randomDragImage === 0 && XInPerctentage < 25 && XInPerctentage > 15 && YInPerctentage < 38 && YInPerctentage > 27) ||
                    (this.state.randomDragImage === 1 && XInPerctentage < 25 && XInPerctentage > 15 && YInPerctentage > 80) ||
                    (this.state.randomDragImage === 2 && XInPerctentage > 85 && YInPerctentage > 27 && YInPerctentage < 38) ||
                    (this.state.randomDragImage === 3 && XInPerctentage > 85 && YInPerctentage > 80)
                )
            )

            ||
            (
                (this.state.catogeryName !== "maths")
                &&
                (
                    (this.state.randomDragImage === 0 && XInPerctentage < 30 && XInPerctentage > 15 && YInPerctentage < 30) ||
                    (this.state.randomDragImage === 1 && XInPerctentage < 25 && XInPerctentage > 15 && YInPerctentage > 65) ||
                    (this.state.randomDragImage === 2 && XInPerctentage > 85 && YInPerctentage < 30) ||
                    (this.state.randomDragImage === 3 && XInPerctentage > 85 && YInPerctentage > 65)
                )
            )
        ) {
            this.locationFuncSeprate()

        }

    }
    onRelaseForMaths() {
        console.log("....................................")
        if (this.state.renderSize === 70) {
            this.setState({
                renderSize: 100
            }, () => {
                console.log(this.state.renderSize, "ssssssssssss")
            })

        }
    }
    render() {
        this.setState({
            flag: true,
            flag3: false,
        })
        let renderSize = 100
        let shadow = this.state.shadowArr[0]
        let shadow1 = this.state.shadowArr[1]
        let shadow2 = this.state.shadowArr[2]
        let shadow3 = this.state.shadowArr[3]
        let shadowForDrag;
        if (this.state.catogeryName === "maths") {
            shadowForDrag = this.state.images[2][this.state.shadowArr[this.state.randomDragImage]]
        }
        else {

            shadowForDrag = this.state.images[0][this.state.shadowArr[this.state.randomDragImage]]
        }
        console.log(shadowForDrag, "shadowForDragshadowForDrag")
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                {(this.state.gif === true) ? (
                    <Animatable.Image
                        animation="zoomOut" duration={10000}
                        style={{ zIndex: 1, position: "absolute", marginBottom: 100, width: "160%", height: "160%" }} resizeMode='contain'
                        source={require("../assets/images/3.gif")} />

                ) : (null)
                }
                {(this.state.images[0].length && this.state.images[0] && this.state.images[0][shadow] && this.state.images[0][shadow1] &&
                    this.state.images[0][shadow2] && this.state.images[0][shadow3] && this.state.images[0][shadow].image &&
                    this.state.images[0][shadow1].image && this.state.images[0][shadow2].image && this.state.images[0][shadow3].image &&
                    this.state.shadowArr) ?
                    (
                        <Shadow
                            sound={this.state.sound}
                            flag3={this.state.flag3}
                            ShadowOne={this.state.images[this.state.shade][shadow].image}
                            ShadowTwo={this.state.images[this.state.shade1][shadow1].image}
                            ShadowThree={this.state.images[this.state.shade2][shadow2].image}
                            ShadowFour={this.state.images[this.state.shade3][shadow3].image}
                            catogeryName={this.state.catogeryName}
                        />)
                    : (<Shadow
                    />)}
                <TouchableOpacity
                    // onPress={() => {
                    //     console.log("4545")
                    //     if (this.state.catogeryName === "maths") {
                    //         renderSize = 70

                    //     }
                    // }}
                    activeOpacity={1}
                    style={{
                        width: "30%", height: "50%", zIndex: 1, position: "absolute",
                        marginHorizontal: "40%", marginVertical: "15%",
                    }}>
                    {(this.state.flag1 === true && this.state.flag === true && this.state.images[0].length && this.state.images[0] && this.state.images[0][shadow] && this.state.images[0][shadow1] &&
                        this.state.images[0][shadow2] && this.state.images[0][shadow3] && this.state.images[0][shadow].image &&
                        this.state.images[0][shadow1].image && this.state.images[0][shadow2].image && this.state.images[0][shadow3].image &&
                        this.state.shadowArr) ?
                        (<Draggable

                            onReleaseForMaths={this.onRelaseForMaths.bind(this)}
                            onLocationChange={this.onLocationChange.bind(this)}
                            reverse={this.state.reverseFlag}
                            renderShape='image' imageSource={shadowForDrag.image}
                            renderSize={this.state.renderSize} offsetX={0} offsetY={0} />) :
                        (null)}
                </TouchableOpacity>
            </View >
        );
    }
}
function mapStateToProp(state) {
    return ({
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        errorMessage: state.root.errorMessage
    })
}
export default connect(mapStateToProp)(StartGame);
AppRegistry.registerComponent('StartGame', () => StartGame);







