import React, { useState, useEffect } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

export default function ScrollUpButton() {
    const [
        showGoUpButton,
        setGoUpButton
    ] = useState(false);

    const drawGoUp = () => {
        if (window.scrollY < 150) {
            setGoUpButton(false);
        } else if (!showGoUpButton) {
            setGoUpButton(true);
        }
    }

    const scrollBackUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    useEffect(
        () => {
            window.addEventListener(
                'scroll',
                drawGoUp
            );
            return () => {
                window.removeEventListener(
                    'scroll',
                    drawGoUp
                );
            }
        },
        []
    );

    console.log(
        'showGoUpButton',
        showGoUpButton
    );

    return (
        <>
            <div className="goup" id="goup" onClick={scrollBackUp} style={{
                opacity: showGoUpButton
                    ? 1
                    : 0
            }}>
                <BiArrowToTop />
            </div>
        </>
    )
}
