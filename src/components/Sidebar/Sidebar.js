import { useState } from "react";
import style from "./Sidebar.module.css";
const Sidebar = () => {
    const [select, setSelect] = useState("home");
    return (
        <div className={style.sidebar}>
            <div
                className={style.item}
                style={{
                    backgroundColor: select == "home" ? "#5c5c5c" : "#191718",
                }}
                onClick={() => setSelect("home")}
            >
                <a href="">Home</a>
            </div>
            <div
                className={style.item}
                style={{
                    backgroundColor:
                        select == "services" ? "#5c5c5c" : "#191718",
                }}
                onClick={() => setSelect("services")}
            >
                <a href="">Services</a>
            </div>
            <div
                className={style.item}
                style={{
                    backgroundColor: select == "news" ? "#5c5c5c" : "#191718",
                }}
                onClick={() => setSelect("news")}
            >
                <a href="">News</a>
            </div>
            <div
                className={style.item}
                style={{
                    backgroundColor: select == "blog" ? "#5c5c5c" : "#191718",
                }}
                onClick={() => setSelect("blog")}
            >
                <a href="">Blog</a>
            </div>
            <div
                className={style.item}
                style={{
                    backgroundColor:
                        select == "contact" ? "#5c5c5c" : "#191718",
                }}
                onClick={() => setSelect("contact")}
            >
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default Sidebar;
