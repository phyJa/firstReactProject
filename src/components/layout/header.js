import React from "react";

function Header() {
    const headerStyle = {
        backgroundColor: "#555",
        textAlign: "center",
        color: "white",
        padding: "10px"
    };
    return(
        <header style = {headerStyle}>
            <h1> TodoList </h1>
        </header>
    );
}

export default Header;