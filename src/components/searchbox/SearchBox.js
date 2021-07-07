import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

export default function SearchBox() {
    return (
        <div className="searchbox-container">
            <form>
                <div className="searchbox-group">
                    <div style={{ position: 'absolute' }}>
                        <select className="searchbox-item">
                            <option value="order by" selected disabled>Order by</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                        <FaAngleDown className="icon-angleDown" />
                    </div>
                    <input
                        type="text"
                        placeholder="Inserisci un titolo"
                        name="searchbox"
                    />
                    <div style={{ position: "absolute", right: 0 }}>
                        <div className="searchbox-wrapper-item">
                            <button
                                type="button"
                                className="searchbox-item"
                            >Invia</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
