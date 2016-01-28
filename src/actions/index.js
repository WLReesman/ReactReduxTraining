export function selectBook(book) {
// SelectBook is an actionCreator, it needs to return an action.
// an object with a type property.
// TYPE is always UPPERCASE
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
