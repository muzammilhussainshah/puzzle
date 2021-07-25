import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    againStart: false,

    imagesForFruits: [
        [
            {
                type: "orange",
                image: require("../../assets/images/orange.png")
            },
            {
                type: "apple",
                image: require("../../assets/images/apple.png")
            },
            {
                type: "Strawberry",
                image: require("../../assets/images/Strawberry.png")
            },
            {
                type: "tomato",
                image: require("../../assets/images/tomato.png")
            },

            {
                type: "apricot",
                image: require("../../assets/images/apricot.png")
            },
            {
                type: "avocado",
                image: require("../../assets/images/avocado.png")
            },
            {
                type: "banana",
                image: require("../../assets/images/banana.png")
            },
            {
                type: "bilberry",
                image: require("../../assets/images/bilberry.png")
            },
            {
                type: "blackberry",
                image: require("../../assets/images/blackberry.png")
            },
            {
                type: "blueberry",
                image: require("../../assets/images/blueberry.png")
            },
            {
                type: "cherry",
                image: require("../../assets/images/cherry.png")
            },
            {
                type: "coconut",
                image: require("../../assets/images/coco.png")
            },
            {
                type: "suger",
                image: require("../../assets/images/suger.png")
            },
        ],
        [
            {
                type: "orange",
                image: require("../../assets/images/orange1.png")
            },
            {
                type: "apple",
                image: require("../../assets/images/apple1.png")
            },
            {
                type: "Strawberry",
                image: require("../../assets/images/Strawberry1.png")
            },
            {
                type: "tomato",
                image: require("../../assets/images/tomato1.png")
            },

            {
                type: "apricot",
                image: require("../../assets/images/apricot1.png")
            },
            {
                type: "avocado",
                image: require("../../assets/images/avocado1.png")
            },
            {
                type: "banana",
                image: require("../../assets/images/banana1.png")
            },
            {
                type: "bilberry",
                image: require("../../assets/images/bilberry1.png")
            },
            {
                type: "blackberry1",
                image: require("../../assets/images/blackberry1.png")
            },
            {
                type: "blueberry1",
                image: require("../../assets/images/blueberry1.png")
            },
            {
                type: "cherry1",
                image: require("../../assets/images/cherry1.png")
            },
            {
                type: "coco1",
                image: require("../../assets/images/coco1.png")
            },
            {
                type: "suger1",
                image: require("../../assets/images/suger1.png")
            },
        ],
        "fruites",
        "fruites",
        13

    ],
    imagesForCartoons: [
        [
            {
                type: "cartoon1",
                image: require("../../assets/images/cartoons/cartoon1.png")
            },
            {
                type: "cartoon2",
                image: require("../../assets/images/cartoons/cartoon2.png")
            },
            {
                type: "cartoon3",
                image: require("../../assets/images/cartoons/cartoon3.png")
            },
            {
                type: "cartoon4",
                image: require("../../assets/images/cartoons/cartoon4.png")
            },
            {
                type: "cartoon5",
                image: require("../../assets/images/cartoons/cartoon5.png")
            },
            {
                type: "cartoon6",
                image: require("../../assets/images/cartoons/cartoon6.png")
            },
            {
                type: "cartoon7",
                image: require("../../assets/images/cartoons/cartoon7.png")
            },
            {
                type: "cartoon8",
                image: require("../../assets/images/cartoons/cartoon8.png")
            },
            {
                type: "cartoon9",
                image: require("../../assets/images/cartoons/cartoon9.png")
            },
            {
                type: "cartoon10",
                image: require("../../assets/images/cartoons/cartoon10.png")
            },
            {
                type: "cartoon11",
                image: require("../../assets/images/cartoons/cartoon11.png")
            },
            {
                type: "cartoon12",
                image: require("../../assets/images/cartoons/cartoon12.png")
            },
            {
                type: "cartoon13",
                image: require("../../assets/images/cartoons/cartoon13.png")
            },

        ],
        [
            {
                type: "cartoon1a",
                image: require("../../assets/images/cartoons/cartoon1a.png")
            },
            {
                type: "cartoon2a",
                image: require("../../assets/images/cartoons/cartoon2a.png")
            },
            {
                type: "cartoon3a",
                image: require("../../assets/images/cartoons/cartoon3a.png")
            },
            {
                type: "cartoon4a",
                image: require("../../assets/images/cartoons/cartoon4a.png")
            },
            {
                type: "cartoon5a",
                image: require("../../assets/images/cartoons/cartoon5a.png")
            },
            {
                type: "cartoon6a",
                image: require("../../assets/images/cartoons/cartoon6a.png")
            },
            {
                type: "cartoon7a",
                image: require("../../assets/images/cartoons/cartoon7a.png")
            },
            {
                type: "cartoon8a",
                image: require("../../assets/images/cartoons/cartoon8a.png")
            },
            {
                type: "cartoon9a",
                image: require("../../assets/images/cartoons/cartoon9a.png")
            },
            {
                type: "cartoon10a",
                image: require("../../assets/images/cartoons/cartoon10a.png")
            },
            {
                type: "cartoon11a",
                image: require("../../assets/images/cartoons/cartoon11a.png")
            },
            {
                type: "cartoon12a",
                image: require("../../assets/images/cartoons/cartoon12a.png")
            },
            {
                type: "cartoon13a",
                image: require("../../assets/images/cartoons/cartoon13a.png")
            },
        ],
        "cartoons",
        "cartoons",
        13
    ],

    imagesForStationary: [
        [
            {
                type: "sta1",
                image: require("../../assets/images/stationary/sta1.png")
            },
            {
                type: "sta2",
                image: require("../../assets/images/stationary/sta2.png")
            },
            {
                type: "sta3",
                image: require("../../assets/images/stationary/sta3.png")
            },
            {
                type: "sta4",
                image: require("../../assets/images/stationary/sta4.png")
            },
            {
                type: "sta5",
                image: require("../../assets/images/stationary/sta5.png")
            },
            {
                type: "sta6",
                image: require("../../assets/images/stationary/sta6.png")
            },
            {
                type: "sta7",
                image: require("../../assets/images/stationary/sta7.png")
            },
            {
                type: "sta8",
                image: require("../../assets/images/stationary/sta8.png")
            },
            {
                type: "sta9",
                image: require("../../assets/images/stationary/sta9.png")
            },
            {
                type: "sta10",
                image: require("../../assets/images/stationary/sta10.png")
            },
            {
                type: "sta11",
                image: require("../../assets/images/stationary/sta11.png")
            },
            {
                type: "sta12",
                image: require("../../assets/images/stationary/sta12.png")
            },
            {
                type: "sta13",
                image: require("../../assets/images/stationary/sta13.png")
            },

        ],
        [
            {
                type: "sta1a",
                image: require("../../assets/images/stationary/sta1a.png")
            },
            {
                type: "sta2a",
                image: require("../../assets/images/stationary/sta2a.png")
            },
            {
                type: "sta3a",
                image: require("../../assets/images/stationary/sta3a.png")
            },
            {
                type: "sta4a",
                image: require("../../assets/images/stationary/sta4a.png")
            },
            {
                type: "sta5a",
                image: require("../../assets/images/stationary/sta5a.png")
            },
            {
                type: "sta6a",
                image: require("../../assets/images/stationary/sta6a.png")
            },
            {
                type: "sta7a",
                image: require("../../assets/images/stationary/sta7a.png")
            },
            {
                type: "sta8a",
                image: require("../../assets/images/stationary/sta8a.png")
            },
            {
                type: "sta9a",
                image: require("../../assets/images/stationary/sta9a.png")
            },
            {
                type: "sta10a",
                image: require("../../assets/images/stationary/sta10a.png")
            },
            {
                type: "sta11a",
                image: require("../../assets/images/stationary/sta11a.png")
            },
            {
                type: "sta12a",
                image: require("../../assets/images/stationary/sta12a.png")
            },
            {
                type: "sta13a",
                image: require("../../assets/images/stationary/sta13a.png")
            },
        ],
        "stationaary",
        "stationaary",
        13
    ],

    imagesForElectronics: [
        [
            {
                type: "elec1",
                image: require("../../assets/images/electronics/elec1.png")
            },
            {
                type: "elec2",
                image: require("../../assets/images/electronics/elec2.png")
            },
            {
                type: "elec3",
                image: require("../../assets/images/electronics/elec3.png")
            },
            {
                type: "elec4",
                image: require("../../assets/images/electronics/elec4.png")
            },
            {
                type: "elec5",
                image: require("../../assets/images/electronics/elec5.png")
            },
            {
                type: "elec6",
                image: require("../../assets/images/electronics/elec6.png")
            },
            {
                type: "elec7",
                image: require("../../assets/images/electronics/elec7.png")
            },
            {
                type: "elec8",
                image: require("../../assets/images/electronics/elec8.png")
            },
            {
                type: "elec9",
                image: require("../../assets/images/electronics/elec9.png")
            },
            {
                type: "elec10",
                image: require("../../assets/images/electronics/elec10.png")
            },
            {
                type: "elec11",
                image: require("../../assets/images/electronics/elec11.png")
            },
            {
                type: "elec12",
                image: require("../../assets/images/electronics/elec12.png")
            },
            {
                type: "elec13",
                image: require("../../assets/images/electronics/elec13.png")
            },

        ],
        [
            {
                type: "elec1a",
                image: require("../../assets/images/electronics/elec1a.png")
            },
            {
                type: "elec2a",
                image: require("../../assets/images/electronics/elec2a.png")
            },
            {
                type: "elec3a",
                image: require("../../assets/images/electronics/elec3a.png")
            },
            {
                type: "elec4a",
                image: require("../../assets/images/electronics/elec4a.png")
            },
            {
                type: "elec5a",
                image: require("../../assets/images/electronics/elec5a.png")
            },
            {
                type: "elec6a",
                image: require("../../assets/images/electronics/elec6a.png")
            },
            {
                type: "elec7a",
                image: require("../../assets/images/electronics/elec7a.png")
            },
            {
                type: "elec8a",
                image: require("../../assets/images/electronics/elec8a.png")
            },
            {
                type: "elec9a",
                image: require("../../assets/images/electronics/elec9a.png")
            },
            {
                type: "elec10a",
                image: require("../../assets/images/electronics/elec10a.png")
            },
            {
                type: "elec11a",
                image: require("../../assets/images/electronics/elec11a.png")
            },
            {
                type: "elec12a",
                image: require("../../assets/images/electronics/elec12a.png")
            },
            {
                type: "elec13a",
                image: require("../../assets/images/electronics/elec13a.png")
            },
        ],
        "elec",
        "elec",
        13
    ],
    imagesForMaths: [

        [
            {
                type: "m1a",
                image: require("../../assets/images/maths/m1a.png")
            },
            {
                type: "m2a",
                image: require("../../assets/images/maths/m2a.png")
            },
          
            {
                type: "m3a",
                image: require("../../assets/images/maths/m3a.png")
            },
            {
                type: "m4a",
                image: require("../../assets/images/maths/m4a.png")
            },
            {
                type: "m5a",
                image: require("../../assets/images/maths/m5a.png")
            },
            {
                type: "m6a",
                image: require("../../assets/images/maths/m6a.png")
            },
            {
                type: "m7a",
                image: require("../../assets/images/maths/m7a.png")
            },
            {
                type: "m8a",
                image: require("../../assets/images/maths/m8a.png")
            },
            {
                type: "m9a",
                image: require("../../assets/images/maths/m9a.png")
            },
            {
                type: "m10a",
                image: require("../../assets/images/maths/m10a.png")
            },
            {
                type: "m11a",
                image: require("../../assets/images/maths/m11a.png")
            },
            {
                type: "m12a",
                image: require("../../assets/images/maths/m12a.png")
            },
            {
                type: "m13a",
                image: require("../../assets/images/maths/m13a.png")
            },
            {
                type: "m14a",
                image: require("../../assets/images/maths/m14a.png")
            },
            {
                type: "m15a",
                image: require("../../assets/images/maths/m15a.png")
            },
            {
                type: "m16a",
                image: require("../../assets/images/maths/m16a.png")
            },
            {
                type: "m17a",
                image: require("../../assets/images/maths/m17a.png")
            },
            {
                type: "m18a",
                image: require("../../assets/images/maths/m18a.png")
            },
            {
                type: "m19a",
                image: require("../../assets/images/maths/m19a.png")
            },
            {
                type: "m20a",
                image: require("../../assets/images/maths/m20a.png")
            },
            {
                type: "m21a",
                image: require("../../assets/images/maths/m21a.png")
            },
            {
                type: "m22a",
                image: require("../../assets/images/maths/m22a.png")
            },
            {
                type: "m23a",
                image: require("../../assets/images/maths/m23a.png")
            },
            {
                type: "m24a",
                image: require("../../assets/images/maths/m24a.png")
            },
            {
                type: "m25a",
                image: require("../../assets/images/maths/m25a.png")
            },
            {
                type: "m26a",
                image: require("../../assets/images/maths/m26a.png")
            },
            {
                type: "m27a",
                image: require("../../assets/images/maths/m27a.png")
            },
            {
                type: "m28a",
                image: require("../../assets/images/maths/m28a.png")
            },
            {
                type: "m29a",
                image: require("../../assets/images/maths/m29a.png")
            },
            {
                type: "m30a",
                image: require("../../assets/images/maths/m30a.png")
            },


        ],
        [
            {
                type: "m1",
                image: require("../../assets/images/maths/m1.png")
            },
            {
                type: "m2",
                image: require("../../assets/images/maths/m2.png")
            },

            

            {
                type: "m3",
                image: require("../../assets/images/maths/m3.png")
            },
            {
                type: "m4",
                image: require("../../assets/images/maths/m4.png")
            },
            {
                type: "m5",
                image: require("../../assets/images/maths/m5.png")
            },
            {
                type: "m6",
                image: require("../../assets/images/maths/m6.png")
            },
            {
                type: "m7",
                image: require("../../assets/images/maths/m7.png")
            },
            {
                type: "m8",
                image: require("../../assets/images/maths/m8.png")
            },
            {
                type: "m9",
                image: require("../../assets/images/maths/m9.png")
            },
            {
                type: "m10",
                image: require("../../assets/images/maths/m10.png")
            },
            {
                type: "m11",
                image: require("../../assets/images/maths/m11.png")
            },
            {
                type: "m12",
                image: require("../../assets/images/maths/m12.png")
            },
            {
                type: "m13",
                image: require("../../assets/images/maths/m13.png")
            },
            {
                type: "m14",
                image: require("../../assets/images/maths/m14.png")
            },
            {
                type: "m15",
                image: require("../../assets/images/maths/m15.png")
            },
            {
                type: "m16",
                image: require("../../assets/images/maths/m16.png")
            },
            {
                type: "m17",
                image: require("../../assets/images/maths/m17.png")
            },
            {
                type: "m18",
                image: require("../../assets/images/maths/m18.png")
            },
            {
                type: "m19",
                image: require("../../assets/images/maths/m19.png")
            },
            {
                type: "m20",
                image: require("../../assets/images/maths/m20.png")
            },
            {
                type: "m21",
                image: require("../../assets/images/maths/m21.png")
            },
            {
                type: "m22",
                image: require("../../assets/images/maths/m22.png")
            },
            {
                type: "m23",
                image: require("../../assets/images/maths/m23.png")
            },
            {
                type: "m24",
                image: require("../../assets/images/maths/m24.png")
            },
            {
                type: "m25",
                image: require("../../assets/images/maths/m25.png")
            },
            {
                type: "m26",
                image: require("../../assets/images/maths/m26.png")
            },
            {
                type: "m27",
                image: require("../../assets/images/maths/m27.png")
            },
            {
                type: "m28",
                image: require("../../assets/images/maths/m28.png")
            },
            {
                type: "m29",
                image: require("../../assets/images/maths/m29.png")
            },
            {
                type: "m30",
                image: require("../../assets/images/maths/m30.png")
            },

          



        ],

        [
            {
                type: "m1d",
                image: require("../../assets/images/maths/m1d.png")
            },
            {
                type: "m2d",
                image: require("../../assets/images/maths/m2d.png")
            },
          
            {
                type: "m3d",
                image: require("../../assets/images/maths/m3d.png")
            },
            {
                type: "m4d",
                image: require("../../assets/images/maths/m4d.png")
            },
            {
                type: "m5d",
                image: require("../../assets/images/maths/m5d.png")
            },
            {
                type: "m6d",
                image: require("../../assets/images/maths/m6d.png")
            },
            {
                type: "m7d",
                image: require("../../assets/images/maths/m7d.png")
            },
            {
                type: "m8d",
                image: require("../../assets/images/maths/m8d.png")
            },
            {
                type: "m9d",
                image: require("../../assets/images/maths/m9d.png")
            },
            {
                type: "m10d",
                image: require("../../assets/images/maths/m10d.png")
            },
            {
                type: "m11d",
                image: require("../../assets/images/maths/m11d.png")
            },
            {
                type: "m12d",
                image: require("../../assets/images/maths/m12d.png")
            },
            {
                type: "m13d",
                image: require("../../assets/images/maths/m13d.png")
            },
            {
                type: "m14d",
                image: require("../../assets/images/maths/m14d.png")
            },
            {
                type: "m15d",
                image: require("../../assets/images/maths/m15d.png")
            },
            {
                type: "m16d",
                image: require("../../assets/images/maths/m16d.png")
            },
            {
                type: "m17d",
                image: require("../../assets/images/maths/m17d.png")
            },
            {
                type: "m18d",
                image: require("../../assets/images/maths/m18d.png")
            },
            {
                type: "m19d",
                image: require("../../assets/images/maths/m19d.png")
            },
            {
                type: "m20d",
                image: require("../../assets/images/maths/m20d.png")
            },
            {
                type: "m21d",
                image: require("../../assets/images/maths/m21d.png")
            },
            {
                type: "m22d",
                image: require("../../assets/images/maths/m22d.png")
            },
            {
                type: "m23d",
                image: require("../../assets/images/maths/m23d.png")
            },
            {
                type: "m24d",
                image: require("../../assets/images/maths/m24d.png")
            },
            {
                type: "m25d",
                image: require("../../assets/images/maths/m25d.png")
            },
            {
                type: "m26d",
                image: require("../../assets/images/maths/m26d.png")
            },
            {
                type: "m27d",
                image: require("../../assets/images/maths/m27d.png")
            },
            {
                type: "m28d",
                image: require("../../assets/images/maths/m28d.png")
            },
            {
                type: "m29d",
                image: require("../../assets/images/maths/m29d.png")
            },
            {
                type: "m30d",
                image: require("../../assets/images/maths/m30d.png")
            },
          


        ],
        "maths",
        30

    ],
    imagesForCounting: [
        [
            {
                type: "0",
                image: require("../../assets/images/counting/0.png")
            },
            {
                type: "1",
                image: require("../../assets/images/counting/1.png")
            },
            {
                type: "10",
                image: require("../../assets/images/counting/10.png")
            },
            {
                type: "23",
                image: require("../../assets/images/counting/23.png")
            },
            {
                type: "17",
                image: require("../../assets/images/counting/17.png")
            },
            {
                type: "37",
                image: require("../../assets/images/counting/37.png")
            },
            {
                type: "39",
                image: require("../../assets/images/counting/39.png")
            },
            {
                type: "45",
                image: require("../../assets/images/counting/45.png")
            },
            {
                type: "52",
                image: require("../../assets/images/counting/52.png")
            },
            {
                type: "69",
                image: require("../../assets/images/counting/69.png")
            },
            {
                type: "78",
                image: require("../../assets/images/counting/78.png")
            },
            {
                type: "81",
                image: require("../../assets/images/counting/81.png")
            },
            {
                type: "93",
                image: require("../../assets/images/counting/93.png")
            },
        ],
        [
            {
                type: "0a",
                image: require("../../assets/images/counting/0a.png")
            },
            {
                type: "1a",
                image: require("../../assets/images/counting/1a.png")
            },
            {
                type: "10a",
                image: require("../../assets/images/counting/10a.png")
            },
            {
                type: "23a",
                image: require("../../assets/images/counting/23a.png")
            },
            {
                type: "17a",
                image: require("../../assets/images/counting/17a.png")
            },
            {
                type: "37a",
                image: require("../../assets/images/counting/37a.png")
            },
            {
                type: "39a",
                image: require("../../assets/images/counting/39a.png")
            },
            {
                type: "45a",
                image: require("../../assets/images/counting/45a.png")
            },
            {
                type: "52a",
                image: require("../../assets/images/counting/52a.png")
            },
            {
                type: "69a",
                image: require("../../assets/images/counting/69a.png")
            },
            {
                type: "78a",
                image: require("../../assets/images/counting/78a.png")
            },
            {
                type: "81a",
                image: require("../../assets/images/counting/81a.png")
            },
            {
                type: "93a",
                image: require("../../assets/images/counting/93a.png")
            },

        ],
        "counting",
        "counting",
        13
    ],

    imagesForAnimals: [
        [
            {
                type: "1",
                image: require("../../assets/images/animals/1.png")
            },
            {
                type: "2",
                image: require("../../assets/images/animals/2.png")
            },
            {
                type: "3",
                image: require("../../assets/images/animals/3.png")
            },
            {
                type: "4",
                image: require("../../assets/images/animals/4.png")
            },
            {
                type: "5b",
                image: require("../../assets/images/animals/5b.png")
            },
            {
                type: "6",
                image: require("../../assets/images/animals/6.png")
            },
            {
                type: "7",
                image: require("../../assets/images/animals/7.png")
            },
            {
                type: "8",
                image: require("../../assets/images/animals/8.png")
            },
            {
                type: "9",
                image: require("../../assets/images/animals/9.png")
            },
            {
                type: "10",
                image: require("../../assets/images/animals/10.png")
            },
            {
                type: "11",
                image: require("../../assets/images/animals/11.png")
            },
            {
                type: "12",
                image: require("../../assets/images/animals/12.png")
            },
            {
                type: "13",
                image: require("../../assets/images/animals/13.png")
            },



        ],
        [
            {
                type: "1a",
                image: require("../../assets/images/animals/1a.png")
            },
            {
                type: "2a",
                image: require("../../assets/images/animals/2a.png")
            },
            {
                type: "3a",
                image: require("../../assets/images/animals/3a.png")
            },
            {
                type: "4a",
                image: require("../../assets/images/animals/4a.png")
            },
            {
                type: "5a",
                image: require("../../assets/images/animals/5a.png")
            },
            {
                type: "6a",
                image: require("../../assets/images/animals/6a.png")
            },
            {
                type: "7a",
                image: require("../../assets/images/animals/7a.png")
            },
            {
                type: "8a",
                image: require("../../assets/images/animals/8a.png")
            },
            {
                type: "9a",
                image: require("../../assets/images/animals/9a.png")
            },
            {
                type: "10a",
                image: require("../../assets/images/animals/10a.png")
            },
            {
                type: "11a",
                image: require("../../assets/images/animals/11a.png")
            },
            {
                type: "12a",
                image: require("../../assets/images/animals/12a.png")
            },
            {
                type: "13a",
                image: require("../../assets/images/animals/13a.png")
            },
        ],
        "animals",
        "animals",
        13
    ],
    imagesForSmallabcd: [
        [
            {
                type: "sa",
                image: require("../../assets/images/smallabcd/sa.png")
            },
            {
                type: "sb",
                image: require("../../assets/images/smallabcd/sb.png")
            },
            {
                type: "sc",
                image: require("../../assets/images/smallabcd/sc.png")
            },
            {
                type: "sd",
                image: require("../../assets/images/smallabcd/sd.png")
            },
            {
                type: "se",
                image: require("../../assets/images/smallabcd/se.png")
            },
            {
                type: "sf",
                image: require("../../assets/images/smallabcd/sf.png")
            },
            {
                type: "sg",
                image: require("../../assets/images/smallabcd/sg.png")
            },
            {
                type: "su",
                image: require("../../assets/images/smallabcd/su.png")
            },
            {
                type: "sv",
                image: require("../../assets/images/smallabcd/sv.png")
            },
            {
                type: "sw",
                image: require("../../assets/images/smallabcd/sw.png")
            },
            {
                type: "sx",
                image: require("../../assets/images/smallabcd/sx.png")
            },
            {
                type: "sy",
                image: require("../../assets/images/smallabcd/sy.png")
            },
            {
                type: "sz",
                image: require("../../assets/images/smallabcd/sz.png")
            },
        ],
        [
            {
                type: "sa1",
                image: require("../../assets/images/smallabcd/sa1.png")
            },
            {
                type: "sb1",
                image: require("../../assets/images/smallabcd/sb1.png")
            },
            {
                type: "sc1",
                image: require("../../assets/images/smallabcd/sc1.png")
            },
            {
                type: "sd1",
                image: require("../../assets/images/smallabcd/sd1.png")
            },
            {
                type: "se1",
                image: require("../../assets/images/smallabcd/se1.png")
            },
            {
                type: "sf1",
                image: require("../../assets/images/smallabcd/sf1.png")
            },
            {
                type: "sg1",
                image: require("../../assets/images/smallabcd/sg1.png")
            },
            {
                type: "su1",
                image: require("../../assets/images/smallabcd/su1.png")
            },
            {
                type: "sv1",
                image: require("../../assets/images/smallabcd/sv1.png")
            },
            {
                type: "sw1",
                image: require("../../assets/images/smallabcd/sw1.png")
            },
            {
                type: "sx1",
                image: require("../../assets/images/smallabcd/sx1.png")
            },
            {
                type: "sy1",
                image: require("../../assets/images/smallabcd/sy1.png")
            },
            {
                type: "sz1",
                image: require("../../assets/images/smallabcd/sz1.png")
            },
        ],
        "smalabc",
        "smalabc",
        13

    ],

    imagesForAbcd: [
        [
            {
                type: "a1",
                image: require("../../assets/images/a1.png")
            },
            {
                type: "b1",
                image: require("../../assets/images/b1.png")
            },
            {
                type: "c1",
                image: require("../../assets/images/c1.png")
            },
            {
                type: "d1",
                image: require("../../assets/images/d1.png")
            },
            {
                type: "e1",
                image: require("../../assets/images/e1.png")
            },
            {
                type: "f1",
                image: require("../../assets/images/f1.png")
            },
            {
                type: "g1",
                image: require("../../assets/images/g1.png")
            },
            {
                type: "u1",
                image: require("../../assets/images/u1.png")
            },
            {
                type: "v1",
                image: require("../../assets/images/v1.png")
            },
            {
                type: "w1",
                image: require("../../assets/images/w1.png")
            },
            {
                type: "x1",
                image: require("../../assets/images/x1.png")
            },
            {
                type: "y1",
                image: require("../../assets/images/y1.png")
            },
            {
                type: "z1",
                image: require("../../assets/images/z1.png")
            },
        ],
        [
            {
                type: "a2",
                image: require("../../assets/images/a2.png")
            },
            {
                type: "b2",
                image: require("../../assets/images/b2.png")
            },
            {
                type: "c2",
                image: require("../../assets/images/c2.png")
            },
            {
                type: "d2",
                image: require("../../assets/images/d2.png")
            },


            {
                type: "e2",
                image: require("../../assets/images/e2.png")
            },
            {
                type: "f2",
                image: require("../../assets/images/f2.png")
            },
            {
                type: "g2",
                image: require("../../assets/images/g2.png")
            },
            {
                type: "u2",
                image: require("../../assets/images/u2.png")
            },
            {
                type: "v2",
                image: require("../../assets/images/v2.png")
            },
            {
                type: "w2",
                image: require("../../assets/images/w2.png")
            },
            {
                type: "x2",
                image: require("../../assets/images/x2.png")
            },
            {
                type: "y2",
                image: require("../../assets/images/y2.png")
            },
            {
                type: "z2",
                image: require("../../assets/images/z2.png")
            },
        ],
        "abc",
        "abc",
        13
    ],




    // index: null,
    // dropDownOptions: {},
    // selectedJob: {},
    // prAdditionalData: {}

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOADER:
            return ({
                ...state,
                isLoader: !state.isLoader
            })
        case ActionTypes.SHOWERROR:
            return ({
                ...state,
                isLoader: !state.isLoader,
                isError: !state.isError,
                errorMessage: action.payload
            })
        case ActionTypes.HIDEERROR:
            return ({
                ...state,
                isError: false,
                errorMessage: ''
            })
        case ActionTypes.POSTJOBS:
            return ({
                ...state,

                jobListArr: action.payload

            })
        case ActionTypes.ALLJOBS:
            return ({
                ...state,

                allJobListArr: action.payload

            })
        case ActionTypes.JOBKEYS:
            return ({
                ...state,

                jobkeys: action.payload

            })
        case ActionTypes.ALLJOBKEYS:
            return ({
                ...state,

                allJobkeys: action.payload

            })
        case ActionTypes.ALLREPORTS:
            return ({
                ...state,

                allReportsArr: action.payload

            })
        case ActionTypes.REPORTJOBKEYS:
            return ({
                ...state,

                reportJobkeys: action.payload

            })
        case ActionTypes.PREREGISTRATION:
            return ({
                ...state,

                objPreRegistration: action.payload

            })
        case ActionTypes.ALLPREREGISTRATION:
            return ({
                ...state,

                objAllPreRegistration: action.payload

            })
        case ActionTypes.INDEX:
            return ({
                ...state,

                index: action.payload

            })
        case ActionTypes.SETDEFDROPDOWNOPTIONS:
            return ({
                ...state,

                dropDownOptions: action.payload

            })
        case ActionTypes.SELECTEDJOB:
            return ({
                ...state,

                selectedJob: action.payload

            })
        case ActionTypes.PRADDIONALDATA:
            return ({
                ...state,

                prAdditionalData: action.payload

            })
        default:
            return state;
    }

}