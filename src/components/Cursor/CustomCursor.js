import React from 'react'
import styled from 'styled-components'
import { useGlobalStateContext } from '../../context/globalContext'
import useMousePosition from '../../hooks/useMousePosition'


export default function CursorComp () {
    
    const { cursorType } = useGlobalStateContext()

    const {x, y} = useMousePosition()


    return (
        <>
            <Cursor
                className={`${!!cursorType ? 'hovered' : ""} ${cursorType}`}
                style={{
                    left: `${x}px`, top: `${y}px` 
                }}
            />
        </>
    )
}

export const Cursor = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    background: transparent;
    border: 2px solid ${props => props.theme.text.primary};
    border-radius: 100%;

    transform: translate3d(-50%, -50%, 0);
    
    transition: 
        width 0.25s ease,
        height 0.25s ease,
        border-radius 0.25s ease,
        border 0.25s ease,

        top 0.3s ease-out,
        left 0.3s ease-out
        ;

    &:active {
        width: 100px;
        height: 100px;
    }
        
    /* transform-origin: center; */
    /* will-change: width, height, transform, border-radius, border; */

    pointer-events: none;
    z-index: 999;

    &.hovered {
        width: 100px;
        height: 100px;
        background: transparent;
    }
`