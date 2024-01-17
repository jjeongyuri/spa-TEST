import { Link } from 'react-router-dom';
import './Header.css';
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import { addWishList, getData, getWishList } from '../Api/Api';
import { useEffect, useState } from 'react';


function ProductName({ items, toggle }) {
    if (!toggle) {
        return null;
    }
    return (
        <li>
            <Link to={`./list/${items.slug}`}>
            {items.titleKorea}
            </Link>
        </li>
    )

}

export default function Header() {
    const data = getData();
    const [toggle, setToggle] = useState(false);
    const listData = getWishList();
 
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li onClick={()=>setToggle(!toggle)}>
                            <a href="#">하일랜드 컬렉션</a>
                            <ul>
                                {data.map((items) =>
                                    <ProductName key={items.id}
                                                 items={items}
                                                 toggle={toggle} />)}
                            </ul>
                        </li>
                        <li>
                            <Link to="about">조말론 런던 하우스</Link>
                        </li>
                        <li>
                            <Link to="story">컬렉션의 탄생</Link>
                        </li>
                    </ul>
                </nav>

                <h1>
                    <Link to="/">JO MALONE<span>LONDON</span></Link>
                </h1>

                <ul className="etc">
                    <li>
                        <a href='#'>
                            <BiUser />
                        </a>
                    </li>
                    <li>
                        <Link to="wishlist">
                            <BiShoppingBag />
                            {/* 5. error or fix */}
                            {
                            listData.length > 0 ?
                            <p>{listData.length}</p> :
                            null
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}