import React from 'react'
import './Button.css'

export const STYLES = [
    'btn--primary',
    'btn--outline'
]

export const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonSize,
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick}
        type={type}>
            {children}
        </button>

    )
}