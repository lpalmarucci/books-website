import React from "react"
import { FaAngleDown } from "react-icons/fa"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import actions from "../actions"
import styled from "styled-components"
import Tooltip from "./Tooltip/Tooltip"

export default function SearchBox() {
  const { q, isError: isErrorSearch } = useSelector(state => state.search)
  const orderBy = useSelector(state => state.books.orderBy)

  const dispatch = useDispatch()

  const showErrorMessage = () => {
    // Mostrare messaggio d'errore
    dispatch(actions.throwSearchError())

    dispatch(actions.stopLoading())
  }

  const handleClick = () => {
    dispatch(actions.setLoading())
    if (q.length > 0 && !isErrorSearch) {
      let url = `${process.env.REACT_APP_GOOGLE_BOOKS_API}?q=${q}`
      if (orderBy !== "") {
        url += `&orderBy=${orderBy}`
      }
      axios.get(url).then(res => {
        if (res.data.items) {
          dispatch(actions.setBooksInfos(res.data))
          dispatch(actions.setLastUrlCalled(url))
          const numItemsDisplayed =
            res.data.items.length < 10 ? res.data.items.length : 10
          dispatch(actions.setNumItemsDisplayed(numItemsDisplayed))
        } else {
          // Mostrare messaggio di ricerca con zero risultati
        }
      })
    } else {
      showErrorMessage()
    }
  }

  const handleChange = e => {
    dispatch(actions.setQueryString(e.target.value))
  }

  const handleChangeOrderBy = e => {
    dispatch(actions.setOrderBy(e.target.value))
  }

  return (
    <SearchWrapper>
      <Form onSubmit={e => e.preventDefault()}>
        <OrderByWrapper style={{ position: "absolute" }}>
          <OrderBy defaultValue="orderby" onChange={handleChangeOrderBy}>
            <option value="orderby" disabled>
              Order by
            </option>
            <option value="newest">Newest</option>
            <option value="relevance">Relevance</option>
          </OrderBy>
          {/* <Button><Tooltip></Tooltip></Button>
          {/* <FaAngleDown /> */}
        </OrderByWrapper>
        <Searchbar
          type="text"
          placeholder="Inserisci un titolo"
          name="searchbox"
          id="searchbox"
          onChange={handleChange}
          value={q}
        />
        <SubmitWrapper>
          <Button type="submit" onClick={handleClick}>
            Invia
          </Button>
        </SubmitWrapper>
      </Form>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`

const Form = styled.form`
  position: relative;

  @media (max-width: 880px) {
    > div {
      top: 60px;
    }

    > input {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
`

const SubmitWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const Button = styled.button`
  height: 50px;
  border-radius: 20px;
  font-size: 18px;
  border: none;
  background-color: var(--green-300);
  padding: 10px 20px;
  outline: none;
  color: white;
  font-weight: 800;
  cursor: pointer;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: var(--green-hover);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.7),
      inset 0px 3px 10px rgba(255, 255, 255, 0.5);
  }
`

const OrderByWrapper = styled.div`
  position: relative;
  height: 50px;

  > svg {
    position: absolute;
  }
`

const OrderBy = styled.select`
  width: 100%;
  padding: 10px 20px;
  height: 50px;
  background-color: var(--green-300);
  color: white;
  font-size: 18px;
  font-weight: 800;
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: var(--green-hover);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.7),
      inset 0px 2px 10px rgba(255, 255, 255, 0.5);
  }
`

const Searchbar = styled.input`
  width: 100%;
  padding: 20px 0px;
  padding-left: 170px;
  padding-right: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  outline: none;
  box-shadow: 0px 1px 20px rgba(255, 255, 255, 0.5);
`
