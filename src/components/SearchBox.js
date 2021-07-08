import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions'

export default function SearchBox() {

    const q = useSelector((state) => state.q),
        dispatch = useDispatch(),

        handleClick = () => {
            axios.get(`${window.env.GOOGLE_BOOKS_API}?q=${q}`).then((res) => {
                console.log(res);
                dispatch(actions.setBooks(res.data.items))
                dispatch(actions.setNumBooks(res.data.totalItems))
            })
        },

        handleChange = (e) => {
            dispatch(actions.setQueryString(e.target.value));

        }

    return (
        <div className="container searchbox-container">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="searchbox-group">
                    <div style={{ position: 'absolute' }}>
                        <select className="searchbox-item search-orderby" defaultValue="orderby">
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
