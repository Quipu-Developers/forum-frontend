// interface PostFile {
//     file_name: string;
//     file_size: number;
//     file_type: string;
//     file_url: string;
// }

// interface BoardPost {
//     post_id: Number;
//     board_type: String;
//     user_name: String;
//     user_id: Number;
//     title: String;
//     order: Number; //post_time으로 대체할 수 있지 않을까?
//     file: PostFile[] | null;
//     post_time: String;
//     edit_time?: String; //수정 시간 필요하지 않을까?
// }

export const board_post_data = 
[
    {
        post_id: 1,
        board_type: "자유게시판",
        user_name: "이예나",
        user_id: 1,
        title: "What is Lorem Ipsum?",
        order: 1,
        file: null,
        post_time: "2024.07.22 15:24"
    },
    {
        post_id: 2,
        board_type: "자유게시판",
        user_name: "이제민",
        user_id: 2,
        title: "Why do we use it?",
        order: 2,
        file: null,
        post_time: "2024.07.22 15:25"
    },
    {
        post_id: 3,
        board_type: "자유게시판",
        user_name: "김예영",
        user_id: 3,
        title: "Where does it come from?",
        order: 3,
        file: null,
        post_time: "2024.07.22 15:25"
    },
    {
        post_id: 4,
        board_type: "정보게시판",
        user_name: "이예나",
        user_id: 1,
        title: "What is Lorem Ipsum?",
        order: 4,
        file: null,
        post_time: "2024.07.22 15:24"
    },
    {
        post_id: 5,
        board_type: "정보게시판",
        user_name: "이제민",
        user_id: 2,
        title: "Why do we use it?",
        order: 5,
        file: null,
        post_time: "2024.07.22 15:25"
    },
    {
        post_id: 6,
        board_type: "정보게시판",
        user_name: "김예영",
        user_id: 3,
        title: "Where does it come from?",
        order: 6,
        file: null,
        post_time: "2024.07.22 15:25"
    }
]