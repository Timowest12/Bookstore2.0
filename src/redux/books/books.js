import * as apiCalls from '../../apifetch';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  await apiCalls.postBook(payload);
  dispatch({
    type: ADD_BOOK,
    payload, // payload: payload(argument)
  });
};
// You can implement this one according to addBook
export const removeBook = (id) => async (dispatch) => {
  await apiCalls.deleteBook(id);
  dispatch({
    type: ADD_BOOK,
    payload: id, // payload: payload(argument)
  });
};

export const getBooks = () => async (dispatch) => {
  const dataFromApi = await apiCalls.getBooksList();
  const payload = Object.entries(dataFromApi).map(([key, value]) => {
    const [books] = value;
    return {
      item_id: key,
      ...books,
    };
  });
  dispatch({
    type: GET_BOOKS,
    payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return [...state, ...action.payload]; // here we are sending initialstate and action
    default:
      return state;
  }
};

export default reducer;
