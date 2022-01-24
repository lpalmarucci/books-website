import React from "react"
import { useSelector } from "react-redux"
import Books from "./Book/Books"
import Loader from "./Loader"
import styled from "styled-components"

export default function BooksContainer() {
  const {
    items: books,
    totalItems,
    isLoading,
  } = useSelector(state => state.books)

  if (isLoading) {
    return <Loader />
  }

  // Da cambiare con un nuovo parametro firstAccess
  if (books.length === 0) {
    return (
      <BooksWrapper className="container booksContainer">
        <Title>Fai la tua prima ricerca</Title>
      </BooksWrapper>
    )
  }

  return (
    <BooksWrapper>
      <Title>La tua ricerca ha prodotto {totalItems} risultati</Title>
      <Books books={books} />
    </BooksWrapper>
  )
}

const BooksWrapper = styled.div`
  max-width: 880px;
  margin: 0 auto;
  display: grid;
  text-align: center;
`

const Title = styled.h2`
  background: linear-gradient(120deg, #1c045d 0%, #412a83 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 40px;
  font-weight: 800;
  /* color: rgba(200, 200, 200, 0.5); */

  @media (max-width: 880px) {
    font-size: 28px;
  }
`
