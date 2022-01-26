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
    return (
      <BooksWrapper>
        <Loader />
      </BooksWrapper>
    )
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
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  text-align: center;
`

const Title = styled.h2`
  background: linear-gradient(
    180deg,
    var(--green-hover) 0%,
    rgba(0, 200, 0, 0.7) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 50px;
  font-weight: 800;

  @media (max-width: 880px) {
    font-size: 36px;
  }
`
