import React from 'react'
import BookInfo from './BookInfo'
import propTypes from 'prop-types'
import { formatDate } from '../../lib/date'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import actions from '../../actions';
import ScrollUpButton from '../scrollUpButton';

export default function Books({ books }) {

    const { lastUrlCalled: url, showedItems } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const fetchData = () => {
        // Dispatch(actions.setLoading());
        console.log(url);
        axios.get(`${url}&startIndex=${showedItems}`).then((res) => {

            if (res.data.items) {
                dispatch(actions.updateBooks(res.data.items));
                let numNewItems = showedItems;
                numNewItems += res.data.items.length < 10
                    ? res.data.items.length
                    : 10;
                console.log(
                    'how many new items?',
                    numNewItems
                );
                dispatch(actions.setNumItemsDisplayed(numNewItems));
            }

        })
    }

    // Molto probabilmente devo gestire il parametro hasMore

    return (
        <>
            <InfiniteScroll
                dataLength={showedItems}
                next={fetchData}
                hasMore={true}
                loader={<h3 className="infinitescroll-loading">Loading more books...</h3>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >

                <div className="books">
                    {books.map((book) => {
                        const {
                            publisher,
                            title,
                            imageLinks
                        } = book.volumeInfo;
                        const authors = book.volumeInfo.authors?.join(', ');
                        const categories = book.volumeInfo.categories?.join(' ');
                        let date = '';
                        if (book.volumeInfo.publishedDate?.length > 0) {
                            date = formatDate(new Date(book.volumeInfo.publishedDate));
                        }

                        const image = imageLinks?.smallThumbnail;
                        const newBook = {
                            authors,
                            publisher,
                            date,
                            title,
                            categories,
                            image,
                            id: book.id
                        };
                        return <BookInfo key={book.id} {...newBook} />
                    })}
                </div>
            </InfiniteScroll>
            <ScrollUpButton />
        </>
    )
}

Books.propTypes = {
    books: propTypes.arrayOf(propTypes.object).isRequired
}
