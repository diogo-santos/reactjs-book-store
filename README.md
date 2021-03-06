# REACTJS Book Management
Display Books from REST calls on Book API

Check it out at https://reactjs-book-store.herokuapp.com

## Getting the code on your computer
- [ ] Download and install <a href="https://nodejs.org/en/download/" target="_blank">Node.js</a>
- [ ] Download the project or clone it from https://github.com/diogo-santos/reactjs-book-store
- [ ] Download the Book API project from https://github.com/diogo-santos/spring-book-api and follow its instructions

Execute the lines one by one
```
cd reactjs-book-store
echo "REACT_APP_API_URL=http://localhost:8080/books" >> .env.local
echo "REACT_APP_GOOGLE_BOOKS_API_URL=https://www.googleapis.com/books/v1/volumes?q=" >> .env.local
```

```
npm install
npm start
```

#### What I have developed
- [ ] Search books from Web
- [ ] Store searched books into books-api
- [ ] Fetch all books from books-api
- [ ] Pagination component
- [ ] View Book Modal
- [ ] Delete Book
- [ ] Sort dropdown
- [ ] Items per page dropdown
- [ ] Testing components with react test library
