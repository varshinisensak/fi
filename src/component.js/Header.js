import React from 'react';
import shop from "./../image/shop.png"
import icon from "./../image/icon.webp"
import basket from "./../image/basket.jpg"
import login from "./../image/login.jpg"

import { Input, Space  } from 'antd'
const { Search } = Input;
const onSearch = value => console.log(value);
function Header(props) {
    return(
        <header className="row block center">
            <div className="Appstyle" >
                <img src={shop} alt={shop}></img>
                <button className="text" style={{ padding: '30px 50px 20px 50px',  height: 'fit-content'}} ></button>
                <Space direction="vertical">
                    <Search placeholder="input search text" size="large" onSearch={onSearch} enterButton style={{ width: '80%' }}/>
                    <img src={basket} alt={basket}/>
                    <img src={login} alt={login} className="login"/>
                </Space>
            </div>
            </header>
    )
}
export default Header; 