import React from "react"
import BookInfo from "./BookInfo"
import propTypes from "prop-types"
import { formatDate } from "../../lib/date"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import actions from "../../actions"
import ScrollUpButton from "../scrollUpButton"
import styled from "styled-components"

export default function Books({ books }) {
  const { lastUrlCalled: url, showedItems } = useSelector(state => state.search)
  const { totalItems } = useSelector(state => state.books)
  const dispatch = useDispatch()

  const fetchData = () => {
    // Dispatch(actions.setLoading());
    axios.get(`${url}&startIndex=${showedItems}`).then(res => {
      if (res.data.items) {
        dispatch(actions.updateBooks(res.data.items))
        let numNewItems = showedItems
        numNewItems += res.data.items.length < 10 ? res.data.items.length : 10
        dispatch(actions.setNumItemsDisplayed(numNewItems))
      }
    })
  }

  const book = [books[0]]

  // Molto probabilmente devo gestire il parametro hasMore

  return (
    <>
      <InfiniteScroll
        dataLength={showedItems}
        next={fetchData}
        hasMore={true}
        loader={
          <h3 className="infinitescroll-loading">Loading more books...</h3>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <BooksWrapper>
          {books.map(book => {
            console.log(book)
            const { publisher, title, imageLinks } = book.volumeInfo
            const authors = book.volumeInfo.authors?.join(", ")
            const categories = book.volumeInfo.categories?.join(" ")
            let date = ""
            if (book.volumeInfo.publishedDate?.length > 0) {
              date = formatDate(new Date(book.volumeInfo.publishedDate))
            }

            const image = imageLinks?.thumbnail
            const newBook = {
              authors,
              publisher,
              date,
              title,
              categories,
              image,
              id: book.id,
            }
            return <BookInfo key={book.id} {...newBook} />
          })}
        </BooksWrapper>
      </InfiniteScroll>
      <ScrollUpButton />
    </>
  )
}

Books.propTypes = {
  books: propTypes.arrayOf(propTypes.object).isRequired,
}

const BooksWrapper = styled.div`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
`
