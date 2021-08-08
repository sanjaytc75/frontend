import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "absolute",
        buttom: "0",
        width: "100%",
        left: '0'
    }
    return (
        <div className="container footer navbar-fixed-bottom">
        <footer className="bg-dark text-light py-3" style=
        {footerstyle}>
            <p className="text-center">
                Copyright &copy; 
            </p>
        </footer>
        </div>
    )
}
