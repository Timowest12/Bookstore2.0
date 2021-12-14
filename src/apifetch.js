const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/G94NWY3g7VbzmV6vhi81/books';
export const getBooksList = async () => {
  const req = await fetch(APIURL);
  const books = await req.json();
  console.log(books);
  return books;
};

// Post A Book
export const postBook = async (newBook) => {
  fetch(APIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: newBook.item_id,
      title: newBook.title,
      category: newBook.category,
    }),
  });
};

export const deleteBook = async (id) => {
  window.location.reload(false);
  await fetch(`${APIURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
