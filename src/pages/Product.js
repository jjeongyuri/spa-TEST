import ProductDetailEtc from "../components/ProductDetailEtc";
import ProductItem from "../components/ProductItem";
import ProductName from "../components/ProductName";
import './Product.css';
import { getData } from "../Api/Api";
import { useParams } from "react-router-dom";
import { getCoursesBySlug } from '../Api/Api';


export default function Product() {
    const {parmSlug} = useParams();
    const item = getCoursesBySlug(parmSlug);
    // console.log(item)
    const data = getData();
    // console.log(data)
    
    return (
        <>
            {/* 컴포넌트 */}
            <div id="box07">
                <ProductName item={item}/>
            </div>

            {/* 컴포넌트 */}
            <div id="box08">
                <ProductDetailEtc item={item}/>
            </div>

            {/* 컴포넌트 */}
            <div id="box03">
                <h2>당신을 위한 추천 상품</h2>
                <ProductItem data={data}/>
            </div>

        </>
    )
}