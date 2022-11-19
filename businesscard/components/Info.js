import React from "react"

export default function Info() {
    return (
            <header>
                <img className="header--img" src="./images/portrait-img.gif" />
                <h1 className="header--main-title">Lars Dalsgaard</h1>
                <h3 className="header--second-title">Frontend Developer</h3>
                <a className="header--url">larsdalsgaard.dk</a>
                <button className="header--btn">Email</button>
            </header>      
        )
}