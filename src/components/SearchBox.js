import React, { createRef } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions'

export default function SearchBox() {

    const { q, isError: isErrorSearch } = useSelector((state) => state.search);
    const orderBy = useSelector((state) => state.books.orderBy);

    const dispatch = useDispatch()

    const showErrorMessage = () => {
        // Mostrare messaggio d'errore
        dispatch(actions.throwSearchError());


        dispatch(actions.stopLoading());
    }

    const handleClick = () => {
        dispatch(actions.setLoading());
        if (q.length > 0 && !isErrorSearch) {
            let url = `${window.env.GOOGLE_BOOKS_API}?q=${q}`;
            if (orderBy !== '') {
                url += `&orderBy=${orderBy}`
            }
            console.log(`url chiamata api --> ${url}`)
            axios.get(url).then((res) => {
                console.log(res);
                dispatch(actions.setBooksInfos(res.data))
            })
        } else {
            showErrorMessage();
        }
    }

    const handleChange = (e) => {
        dispatch(actions.setQueryString(e.target.value));
    }

    const handleChangeOrderBy = (e) => {
        dispatch(actions.setOrderBy(e.target.value))
    }

    return (
        <div className="container searchbox-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="searchbox-group">
                    <div style={{ position: 'absolute' }}>
                        <select className="searchbox-item search-orderby" defaultValue="orderby" onChange={handleChangeOrderBy}>
                            <option value="orderby" disabled>Order by</option>
                            <option value="newest">Newest</option>
                            <option value="relevance">Relevance</option>
                        </select>
                        <FaAngleDown className="icon-angleDown" />
                    </div>
                    <input
                        type="text"
                        placeholder="Inserisci un titolo"
                        name="searchbox"
                        id="searchbox"
                        onChange={handleChange}
                    />
                    <div style={{
                        position: "absolute",
                        right: 0
                    }}>
                        <div className="searchbox-wrapper-item">
                            <button
                                type="submit"
                                onClick={handleClick}
                                className="searchbox-item"
                            >Invia</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
