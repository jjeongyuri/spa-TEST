import { useEffect, useState } from "react";
import WishListItem from "../components/WishListItem";
import './WishList.css';
import { getWishList } from "../Api/Api";
import data from '../Api/data.json';

export default function WishList() {
    const [dataFromBy, setDataFromBy] = useState([]);
    // 4. I have a question
    useEffect(() => {
        const NestData = getWishList();
        setDataFromBy(NestData);
    }, []);
    const [quantity, setQuantity] = useState(1);
    const finds = data.find((item)=>item.price);
    const producePrice = finds.price
    // console.log(producePrice)
    const [total, setTotal] = useState(producePrice);
    // console.log(total);
    const changeNum = (num) => {
        setQuantity(num);
        setTotal(num * total);
    };



    return (
        <>
            {/* box15 */}
            <div id="box15">
                <div>
                    <h2>장바구니</h2>
                    <div id="wishlist">
                        <ul className="all">
                            <li>제품</li>
                            <li>가격</li>
                            <li>수량</li>
                            <li>총 합계</li>
                        </ul>

                        <ul className="wishlistproduct">
                            {dataFromBy.map((item) => (
                                <li key={item.slug}>
                                    <WishListItem item={item}
                                        setDataFromBy={setDataFromBy}
                                        total={total}
                                        quantity={quantity}
                                        changeNum={changeNum}
                                    />
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}