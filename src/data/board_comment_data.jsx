// interface CommentFile {
//     file_name: string;
//     file_size: number;
//     file_type: string;
//     file_url: string;
// }

// interface BoardComment {
//     comment_id: Number;
//     parent_comment_id: Number;
//     post_id: Number; //게시물 id 필요하지 않을까?
//     board_type: String;
//     user_name: String;
//     user_id: Number;
//     comment: String; //제목과 내용 대신 comment로 대체해도 되지 않을까?
//     order: Number; //post_time으로 대체할 수 있지 않을까?
//     file: CommentFile[] | null;
//     post_time: String;
//     edit_time?: String; //수정 시간 필요하지 않을까?
// }

export const board_comment_data = 
[
    {
        comment_id: 1,
        parent_comment_id: -1, // 제일 부모 댓글일 때
        post_id: 1,
        board_type: "자유게시판",
        user_name: "이예나",
        user_id: 1,
        comment: "첫 댓글",
        order: 1,
        file: null,
        post_time: "2024.07.22 15:40"
    },
    {
        comment_id: 2,
        parent_comment_id: 1,
        post_id: 1,
        board_type: "자유게시판",
        user_name: "이제민",
        user_id: 2,
        comment: "첫 댓글의 첫 대댓글",
        order: 1,
        file: null,
        post_time: "2024.07.22 15:40"
    },
    {
        comment_id: 3,
        parent_comment_id: -1, // 제일 부모 댓글일 때
        post_id: 1,
        board_type: "자유게시판",
        user_name: "이제민",
        user_id: 2,
        comment: "두번째 댓글",
        order: 2,
        file: null,
        post_time: "2024.07.22 15:40"
    },
    {
        comment_id: 4,
        parent_comment_id: -1, // 제일 부모 댓글일 때
        post_id: 4,
        board_type: "정보게시판",
        user_name: "이제민",
        user_id: 2,
        comment: "첫번째 댓글",
        order: 1,
        file: null,
        post_time: "2024.07.22 15:40"
    },
    {
        comment_id: 5,
        parent_comment_id: -1, // 제일 부모 댓글일 때
        post_id: 9,
        board_type: "코딩게시판",
        user_name: "이제민",
        user_id: 2,
        comment: "첫번째 댓글",
        order: 1,
        file: null,
        post_time: "2024.07.22 15:40"
    },
]