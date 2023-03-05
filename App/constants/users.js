import assets from "./assets";

const Users = [
    {
        id: 1,
        username: "aphan",
        password: "12345",
        firstname: "Albert",
        lastname: "Phan",
        image: assets.aphan,
        requests: [
            {
                id: 9,
                username: "bob",
                firstname: "Bob",
                lastname: "Bobson",
                image: assets.person01,
            },
        ],
        friends: [
            {
                id: 5,
                username: "jessica",
                firstname: "Jessica",
                lastname: "Tan",
                image: assets.person01,
            },
            {
                id: 6,
                username: "jennifersia",
                firstname: "Jennifer",
                lastname: "Sia",
                image: assets.person02,
            },
            {
                id: 7,
                username: "rosiewong",
                firstname: "Rosie",
                lastname: "Wong",
                image: assets.person03,
            },
            {
                id: 8,
                username: "vincentswift",
                firstname: "Vincent",
                lastname: "Swift",
                image: assets.person04,
            }
        ],
        others: [
            {
                id: 2,
                username: "acastro",
                password: "12345",
                firstname: "Amia",
                lastname: "Castro",
                image: assets.person03,
                friends: [],
            },
            {
                id: 3,
                username: "fsandovalgarza",
                password: "12345",
                firstname: "Fernando",
                lastname: "Sandoval Garza",
                image: assets.person02,
                friends: []
            },
            {
                id: 4,
                username: "csmith",
                password: "12345",
                firstname: "Cailyn",
                lastname: "Smith",
                image: assets.person04,
                friends: []
            },
        ]
    }
]

export { Users };