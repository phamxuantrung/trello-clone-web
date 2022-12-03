export const sampleData = {
    boards: [
        {
            id: "board-1",
            columnOrder: ["column-1", "column-2"],
            columns: [
                {
                    id: "column-1",
                    title: "To do",
                    cardOrder: ["card-1", "card-2"],
                    cards: [
                        {
                            id: "card-1",
                            title: "Tiếng anh",
                            background: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/960x640/0544300f63565ddba9b2e994afd25040/photo-1669025466409-450f22c7561a.jpg",
                        },
                        {
                            id: "card-2",
                            title: "Toán rời rạc",
                            background: null,
                        },
                    ],
                },
                {
                    id: "column-2",
                    title: "Done",
                    cardOrder: ["card-1"],
                    cards: [
                        {
                            id: "card-1",
                            title: "Cơ sở dữ liệu",
                            background: null,
                        },
                    ],
                },
            ],
        },
    ],
};
