export const API_URL = "https://www.googleapis.com/books/v1/volumes";

export function SEARCH_BOOKS(query: string, startItem: number) {
  return {
    url:
      API_URL + "?q=" + query + "&startIndex=" + startItem + "&maxResults=12",
    options: {
      method: "GET",
    },
  };
}

export function SEARCH_BOOK(bookId: string) {
  return {
    url: API_URL + "/" + bookId,
    options: {
      method: "GET",
    },
  };
}
