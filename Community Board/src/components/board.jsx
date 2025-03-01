import React from "react";
import Card from "./card";

const Board = () => {
    return (
        <div className="board">
            <Card language_name = "Python"
                link = "https://www.python.org/"
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                description = "A beginner-friendly and versatile language used in web development, data science, AI, and automation. Its simple syntax makes it easy to learn and use. With a vast ecosystem of libraries, Python is widely adopted in various industries." />

            <Card language_name = "C++"
                link = "https://cplusplus.com/"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsB3Zrsil8K6w7RnpvJAYUuyFh3GjNvLAyvA&s"
                description = " A powerful, high-performance language used in game development, competitive programming, and system applications. It offers both object-oriented and low-level memory control. Many large-scale applications and operating systems are built using C++."
            />
            <Card language_name = "Java"
                link = "https://www.java.com/"
                image = "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
                description = "A platform-independent language widely used for enterprise applications, Android development, and backend systems. Its Write Once, Run Anywhere principle ensures portability across devices. Java is known for its strong memory management and security features."
            />
            <Card language_name = "C"
                link = "https://www.learn-c.org/"
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png"
                description = "One of the oldest and most efficient programming languages, essential for system programming and embedded devices. It provides direct memory access and fine-grained hardware control. C serves as the foundation for many modern programming languages."
            />
            <Card language_name = "C#"
                link = "https://www.w3schools.com/cs/cs_intro.php"
                image = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/910px-Logo_C_sharp.svg.png"
                description = "A Microsoft-developed language used for game development (Unity), desktop applications, and enterprise software. It is part of the .NET framework, offering strong integration with Windows applications. C# supports object-oriented and component-based programming."
                />
            <Card language_name = "JavaScript"
                link = "https://www.javascript.com/"
                image = "https://banner2.cleanpng.com/20190129/vxi/kisspng-javascript-web-applications-scalable-vector-graphi-1713908481051.webp"
                description = "The core language of the web, enabling interactive and dynamic websites. It works alongside HTML and CSS to create user-friendly front-end experiences. JavaScript is also widely used in backend development with Node.js."
                />
            <Card language_name = "SQL" 
                link = "https://www.w3schools.com/sql/"
                image = "https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg"
                description = "A  language designed for managing and querying relational databases efficiently. It is essential for backend development, allowing users to store and manipulate structured data. SQL is widely used in data analysis, reporting, and business intelligence"
            />
            <Card language_name = "Go"
                link = "https://www.go.dev"
                image = "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_LightBlue.png"
                description = "A fast and modern language developed by Google, optimized for backend systems and cloud computing. It is known for its simplicity, efficiency, and built-in concurrency support. Many high-performance distributed systems rely on Go."
                />
            <Card language_name = "Delphi/Object Pascal"
                link = "https://en.wikipedia.org/wiki/Delphi_(software)"
                image = "https://img.icons8.com/fluent/512/pascal.png"
                description = "A high-level language used for rapid desktop and database application development. It features a visual component-based approach for easy GUI design. Delphi is popular for building enterprise and financial software solutions."
                />
            <Card language_name = "Virtual Basic"
                link = "http://www.vpascal.com/"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyp8CVKlXQ693CX7c7qCWAWHkfjco0arnOQ&s"
                description = "A simple and event-driven language from Microsoft, designed for creating Windows applications. It provides a drag-and-drop interface for rapid development. VB is widely used in business applications and automation tasks."
                />
        </div>
    )
}

export default Board;