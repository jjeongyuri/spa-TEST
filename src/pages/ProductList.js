import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import {BiSearchAlt} from 'react-icons/bi';
import './ProductList.css';
import { getData } from '../Api/Api';
import { useState } from 'react';
import { useSearchParams } from "react-router-dom";



export default function ProductList() {
    const [searchParams,setSearchPrams] = useSearchParams();
    const initKeyword = searchParams.get('keyword');
    const [keyword,setKeyword] = useState(initKeyword || '');
    const data = getData(initKeyword);

    const handleKeywordChange = (e) => setKeyword(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchPrams(keyword?{keyword}:{})
    }
    return (
        <>
            {/* box04 */}
            <div id="box04">
                <div>
                    <img src={'./img/box04.avif'}  alt="하일랜드" />
                    <h2>하일랜드</h2>
                </div>
            </div>

            {/* box05 */}
            <div id="box05">
                <div>
                    <p>장엄한 광야. 안개가 자욱한 들판과 헤더 꽃으로 뒤덮인 언덕. 자연이 다시 차지한 고대 성곽.<br />
                        스코틀랜드 하일랜드의 길들여지지 않은 아름다움에서 영감을 받은 리미티드 컬렉션입니다.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               onChange={handleKeywordChange} />
                        <BiSearchAlt style={{width:"30px",
                                     height:" 30px"}}/>
                    </form>

                    {/* 컴포넌트 */}
                    <div id="box03">
                        <ProductItem data={data}/>
                    </div>
                </div>
            </div>

            {/* box06 */}
            <div id='box06'>
                <div>
                    <figure>
                        <img src={"./img/box06.avif"} alt='컬렉션의 탄생' />
                        <figcaption>
                            <p>컬렉션의 탄생</p>
                            <p>
                                <Link to="../story">스토리보기</Link>
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}