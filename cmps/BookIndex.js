import { bookService } from '../services/book.service.js'

import BookList from './BookList.js'

export default {
    template: `<h1>Miss Books</h1>`,
    components: {
        bookService,
        BookList,
    }
}