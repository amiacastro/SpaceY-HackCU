import assets from "./assets";

const Users = [
    {
        id: 1,
        username: "aphan",
        password: "12345",
        firstname: "Albert",
        lastname: "Phan",
        image: assets.person01,
        friends: [
            {
                id: 1,
                user: "@jessica",
                name: "Jessica Tan",
                image: assets.person01,
            },
            {
                id: 2,
                user: "@jennifersia",
                name: "Jennifer Sia",
                image: assets.person02,
            },
            {
                id: 3,
                user: "@rosiewong",
                name: "Rosie Wong",
                image: assets.person03,
            },
            {
                id: 4,
                user: "@vincentswift",
                name: "Vincent Swift",
                image: assets.person04,
            }
        ]
    },
]

export { Users };