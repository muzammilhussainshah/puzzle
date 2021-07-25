// import { StackNavigator } from "react-navigation"
import {
    createSwitchNavigator,
    createStackNavigator,
    StackNavigator
} from "react-navigation";// import SignUp from
import startGame from "./src/container/startGame"
import gameCatogery from "./src/container/gameCatogery"
// import test from "./src/container/test"
import shadow from "./src/component/shadow"
import splashScreen from "./src/container/splash"
import * as firebase from 'firebase'





var config = {
    apiKey: "AIzaSyDqkBW7jcxpBIPquGjQcz3NlQsaCO3T6i0",
    authDomain: "app-for-services.firebaseapp.com",
    databaseURL: "https://app-for-services.firebaseio.com",
    projectId: "app-for-services",
    storageBucket: "app-for-services.appspot.com",
    messagingSenderId: "264152244740"
};
firebase.initializeApp(config);






const Main = createStackNavigator(
    {

     


       

        ////////////////////////////////for testing rout/////////////
        startGame: {
            screen: startGame
        },
        gameCatogery: {
            screen: gameCatogery
        },
        // test: {
        //     screen: test
        // },
        shadow: {
            screen: shadow
        },
        splashScreen: {
            screen: splashScreen
        },


    },
    {
        initialRouteName: "splashScreen",
        navigationOptions: {
            header: null
        }
    }
);





const MainNavigator = createSwitchNavigator(
    {
        // AuthLoading: AuthLoading,
        // AppStackCompany: AppStackCompany,
        // AppStackUser: AppStackUser,
        // Auth: AuthStack
        Main: Main
    },
    {
        initialRouteName: "Main",
        header: null
    }
);

export default MainNavigator
