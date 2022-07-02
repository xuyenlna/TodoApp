export const initalData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["colum-1", "colum-2", "colum-3"],
      columns: [
        {
          id: "colum-1",
          boardId: "board-1",
          title: "todo",
          cardOrder: ["card-1", "card-2", "card-3"],
          cards: [
            {
              id: "card-1",
              columnId: "column-1",
              boardId: "board-1",
              title: "Title of Card 1",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-2",
              columnId: "column-1",
              boardId: "board-1",
              title: "Title of Card 2",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-3",
              columnId: "column-1",
              boardId: "board-1",
              title: "Title of Card 3",
              deadline: "07/20/2022",
              priority: "medium",
            },
          ],
        },

        {
          id: "colum-2",
          boardId: "board-1",
          title: "doing",
          cardOrder: ["card-4", "card-5", "card-6", "card-7"],
          cards: [
            {
              id: "card-4",
              columnId: "column-2",
              boardId: "board-1",
              title: "Title of Card 4",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-5",
              columnId: "column-2",
              boardId: "board-1",
              title: "Title of Card 5",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-6",
              columnId: "column-2",
              boardId: "board-1",
              title: "Title of Card 6",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-7",
              columnId: "column-2",
              boardId: "board-1",
              title: "Title of Card 7",
              deadline: "07/20/2022",
              priority: "medium",
            },
          ],
        },

        {
          id: "colum-3",
          boardId: "board-1",
          title: "done",
          cardOrder: ["card-8", "card-9", "card-10", "card-11", "card-12"],
          cards: [
            {
              id: "card-8",
              columnId: "column-3",
              boardId: "board-1",
              title: "Title of Card 8",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-9",
              columnId: "column-9",
              boardId: "board-1",
              title: "Title of Card 9",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-10",
              columnId: "column-3",
              boardId: "board-1",
              title: "Title of Card 10",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-11",
              columnId: "column-3",
              boardId: "board-1",
              title: "Title of Card 11",
              deadline: "07/20/2022",
              priority: "medium",
            },
            {
              id: "card-12",
              columnId: "column-3",
              boardId: "board-1",
              title: "Title of Card 12",
              deadline: "07/20/2022",
              priority: "medium",
            },
          ],
        },
      ],
    },
  ],
};