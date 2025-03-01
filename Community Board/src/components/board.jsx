import React from "react";
import Card from "./card";

const Board = () => {
    return (
        <div>
        <Card language_name = "Python" link = "https://www.facebook.com" image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"/>
        <Card language_name = "C++" link = "https://www.c++.com" />
        <Card language_name = "Java" link = "https://www.java.com" />
        <Card language_name = "C" link = "https://www.c.com" />
        <Card language_name = "C#" link = "https://www.c#.com" />
        <Card language_name = "JavaScript" link = "https://www.javascript.com" />
        <Card language_name = "SQL" link = "https://www.sql.com" />
        <Card language_name = "Go" link = "https://www.go.com" />
        <Card language_name = "Delphi/Object Pascal" link = "https://www.delphi.com" />
        <Card language_name = "Virtual Basic" link = "https://www.virtual basic.com" />
        </div>
    )
}

export default Board;