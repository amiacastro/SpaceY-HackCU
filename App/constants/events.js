import assets from "./assets";

const Events = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
        {
            id: 1,
            title: "The Great Gatsby",
            date: "March 5",
            time: "19:00",
            location: "Theatre Royal, Drury Lane, London",
            description: "Let's watch a play together.",
            attendees: ["Suzanne", "Eric", "Albert"],
            host: {
                id: 1,
                name: "Suzanne",
                profilePic: assets.user1
            },
            image: assets.nft02
        },
        {
            id: 2,
            title: "The Phantom of the Opera",
            date: "March 5",
            time: "19:00",
            location: "Her Majesty's Theatre, London",
            description: "Let's watch another play.",
            attendees: [
                {
                    id: 1,
                    name: "Suzanne",
                    profilePic: assets.user1
                },
                {
                    id: 2,
                    name: "Eric",
                    profilePic: assets.user2
                }
            ],
            host: {
                id: 1,
                name: "Suzanne",
                profilePic: assets.user1
            },
            image: assets.nft01
        }
    ],
    [],
    [],
    [],
    [],
    [],
    [
        {
            id: 4,
            title: "The Book of Mormon",
            date: "March 11",
            time: "19:00",
            location: "Prince of Wales Theatre, London",
            description: "Join us for a musical.",
            attendees: [
                {
                    id: 1,
                    name: "Suzanne",
                    profilePic: assets.user1
                },
                {
                    id: 2,
                    name: "Eric",
                    profilePic: assets.user2
                }
            ],
            host: {
                id: 1,
                name: "Bill",
                profilePic: assets.user1,
            },
            image: assets.nft04
        }
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
        {
            id: 3,
            title: "The Lion King",
            date: "March 22",
            time: "19:00",
            location: "Lyceum Theatre, London",
            description: "Join us for a musical.",
            attendees: [
                {
                    id: 1,
                    name: "Suzanne",
                    profilePic: assets.user1
                },
                {
                    id: 2,
                    name: "Eric",
                    profilePic: assets.user2
                }
            ],
            host: {
                id: 1,
                name: "Peter",
                profilePic: assets.user1
            },
            image: assets.nft03
        }
    ]
]
export { Events };
