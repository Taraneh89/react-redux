import { TOGGLE_TODO, INSERT_TODO } from "./type";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.payload.id,
            content: action.payload.content,
            complate: false,
          },
        ],
      };

    case TOGGLE_TODO:
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.map((row) => {
          if (row.id === id) {
            return {
              id: row.id,
              content: row.content,
              complate: !row.complate,
            };
          } else {
            return row;
          }
        }),
      };
    default:
      return state;
  }
};
export default reducer;
