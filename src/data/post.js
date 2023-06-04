import {
    USERS
} from "./users";

export const POSTS = [{
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
        user: USERS[0].user,
        likes: 1,
        caption: "Lets do this !!!",
        profile_picture: USERS[0].image,
        comments: [{
                user: "Sharma",
                comment: "Yeah bro"
            },
            {
                user: "Shubhman",
                comment: "Hell yeah"
            },
        ]
    },
    {
        imageUrl: "https://www.kreedon.com/wp-content/uploads/2019/03/Rohit-Sharma2-696x376.jpg.webp",
        user: USERS[1].user,
        likes: 2,
        caption: "Gotta win this match",
        profile_picture: USERS[1].image,
        comments: []
    },
    {
        imageUrl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322697.png",
        user: USERS[2].user,
        likes: 3,
        caption: "One step at a time !",
        profile_picture: USERS[2].image,
        comments: [{
                user: "Sharma",
                comment: "Nice Win"
            },
            {
                user: "Virat",
                comment: "Great performance !"
            },
        ]
    },
]
