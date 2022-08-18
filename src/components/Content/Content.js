import React from "react";
import style from "./Content.module.css";
const Content = () => {
    return (
        <div className={style.Content}>
            <img src="/logoNCC 1.png" alt="" className={style.logo} />
            <div className={style.Content1}>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sit, illo consequuntur dicta obcaecati earum ad, asperiores
                    beatae vitae amet iste eligendi saepe animi. Voluptates
                    quis, maiores dolores veritatis sint eveniet.Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className={style.Content2}>
                <div className={style.Content2_Item}>
                    <div className={style.Content2_Item_Title}>
                        Lorem ipsum dolor sit
                    </div>
                    <div className={style.Content2_Item_Body}>
                        <img
                            src="/css-icon 1.png"
                            alt=""
                            className={style.logo1}
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sit, illo consequuntur dicta obcaecati earum
                            ad, asperiores beatae vitae amet iste eligendi saepe
                            animi. Voluptates quis, maiores dolores veritatis
                            sint eveniet.
                        </p>
                    </div>
                </div>
                <div className={style.Content2_Item}>
                    <div className={style.Content2_Item_Title}>
                        Lorem ipsum dolor sit
                    </div>
                    <div className={style.Content2_Item_Body}>
                        <img
                            src="/html-icon 1.png"
                            alt=""
                            className={style.logo1}
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sit, illo consequuntur dicta obcaecati earum
                            ad, asperiores beatae vitae amet iste eligendi saepe
                            animi. Voluptates quis, maiores dolores veritatis
                            sint eveniet.
                        </p>
                    </div>
                </div>
                <div className={style.Content2_Item}>
                    <div className={style.Content2_Item_Title}>
                        Lorem ipsum dolor sit
                    </div>
                    <div className={style.Content2_Item_Body}>
                        <img
                            src="/url-icon 1.png"
                            alt=""
                            className={style.logo1}
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sit, illo consequuntur dicta obcaecati earum
                            ad, asperiores beatae vitae amet iste eligendi saepe
                            animi. Voluptates quis, maiores dolores veritatis
                            sint eveniet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
