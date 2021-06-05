import t1 from "../Assets/images/t1.png";
import t3 from "../Assets/images/t3.png";
import t5 from "../Assets/images/t5.png";
import banner1 from "../Assets/images/banner/1.jpg";
import banner2 from "../Assets/images/banner/5.jpg";
import banner3 from "../Assets/images/banner/3.jpg";
import room1 from "../Assets/images/rooms/01.jpg";
import room2 from "../Assets/images/rooms/02.jpg";
import room3 from "../Assets/images/rooms/03.jpg";
import room4 from "../Assets/images/rooms/04.jpg";



export let Rooms = [
    
        {
            Name:"ULTRA DELUX",
            Amenities: "Television, WIFI, Hair Dryer, Gym",
            Includes: "Parking Space, Breakfast",
            Maximum_Persons: 3,
            roomImage:room2,
            PricePerNight: 50000,
        },
        {
            Name:"EXECUTIVE",
            Amenities: "Television, WIFI, Hair Dryer",
            Includes: "Parking Space",
            Maximum_Persons: 2,
            roomImage:room3,
            PricePerNight: 40000,
        },
        {
            Name:"PREMIUM",
            Amenities: "Television, WIFI",
            Includes: "Car Wash",
            Maximum_Persons: 2,
            roomImage:room4,
            PricePerNight: 30000,
        },
        {
            Name:"REGULAR",
            Amenities: "Television,",
            Includes: "-",
            Maximum_Persons: 1,
            roomImage:room1,
            PricePerNight: 15000,
        }
    
]

 export let HoteList = [
    {
        Name: "Top Rank Luxury And Hotels",
        City: "Asaba",
        State: "Delta State",
        DisplayImage: t5,
        About:"Top Rank Hotels takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Abuja’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Lagos, Lekki Phase I, and Victoria Island will leave you with vacation memories you’ll cherish for life.",
        id:3,
        bannerImage:banner3,
        Address: "GD Falls, Asaba, Delta State, Nigeria",
        PricePerNight: 30000,
        Rooms:[
            {
                Name:"ULTRA DELUX",
                Amenities: "Television, WIFI, Hair Dryer, Gym",
                Includes: "Parking Space, Breakfast",
                Maximum_Persons: 3,
                roomImage:room2,
                PricePerNight: 50000,
                id:1
            },
            {
                Name:"EXECUTIVE",
                Amenities: "Television, WIFI, Hair Dryer",
                Includes: "Parking Space",
                Maximum_Persons: 2,
                roomImage:room3,
                PricePerNight: 40000,
                id:2
            },
            {
                Name:"PREMIUM",
                Amenities: "Television, WIFI",
                Includes: "Car Wash",
                Maximum_Persons: 2,
                roomImage:room4,
                PricePerNight: 30000,
                id:3
            },
            {
                Name:"REGULAR",
                Amenities: "Television,",
                Includes: "-",
                Maximum_Persons: 1,
                roomImage:room1,
                PricePerNight: 15000,
                id:4
            }
        ]
    },
    {
        Name: "Pine Crest Hotels",
        City: "Enugu",
        State: "Enugu State",
        DisplayImage: t1,
        About:"Pine Crest Hotels takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Abuja’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Lagos, Lekki Phase I, and Victoria Island will leave you with vacation memories you’ll cherish for life.",
        id:1,
        bannerImage:banner1,
        Address: "Independence Layout, Enugu, Enugu State, Nigeria",
        PricePerNight: 25000,
        Rooms:[
            {
                Name:"ULTRA DELUX",
                Amenities: "Television, WIFI, Hair Dryer, Gym",
                Includes: "Parking Space, Breakfast",
                Maximum_Persons: 3,
                roomImage:room1,
                PricePerNight: 70000,
            },
            {
                Name:"EXECUTIVE",
                Amenities: "Television, WIFI, Hair Dryer",
                Includes: "Parking Space",
                Maximum_Persons: 2,
                roomImage:room2,
                PricePerNight: 65000,
            },
            {
                Name:"REGULAR",
                Amenities: "Television,",
                Includes: "-",
                Maximum_Persons: 1,
                roomImage:room3,
                PricePerNight: 47000,
            }
        ]
    },
    {
        Name: "Bon Sunshine Hotels",
        City: "Lagos",
        State: "Lagos State",
        DisplayImage: t3,
        About:"Bon Sun Shine Hotels takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Abuja’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Lagos, Lekki Phase I, and Victoria Island will leave you with vacation memories you’ll cherish for life.",
        id:2,
        bannerImage:banner2,
        Address: "Lekki Phase I, Lagos State, Nigeria",
        PricePerNight: 40000,
        Rooms:[
            
            {
                Name:"EXECUTIVE",
                Amenities: "Television, WIFI, Hair Dryer",
                Includes: "Parking Space",
                Maximum_Persons: 2,
                roomImage:room4,
                PricePerNight: 76000,
            },
            {
                Name:"REGULAR",
                Amenities: "Television,",
                Includes: "-",
                Maximum_Persons: 1,
                roomImage:room2,
                PricePerNight: 50000,
            }
        ]
    },
    
    
]