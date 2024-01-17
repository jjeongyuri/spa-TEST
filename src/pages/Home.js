import ProductItem from '../components/ProductItem';
import './Home.css';
import {getData} from '../Api/Api';

// swiper
import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';



export default function Home() {
    const data = getData();
    return (
        <>
            {/* box01 */}
            <div id="box01">
                <Swiper navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                    style={{
                        height: '100vh',
                        "--swiper-navigation-color": "#1c1c1c",
                        "--swiper-pagination-color": "#1c1c1c",
                    }}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide>
                        <img src={'./img/box01_pic01.avif'} alt='사진1' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"./img/box01_pic02.avif"} alt='사진2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"./img/box01_pic03.avif"} alt='사진3' />
                    </SwiperSlide>

                    <div className="collection">
                        <h2>하일랜드 컬렉션</h2>
                        <p>
                            <Link to="list">컬렉션 보기</Link>
                        </p>
                    </div>
                </Swiper>
            </div>

            {/* box02 */}
            <div id="box02">
                <div>
                    <figure>
                        <img src={'./img/box02_pic01.avif'} alt="향수1" />
                        <figcaption>
                            <p>와일드 아킬리아 코롱</p>
                            <p>
                                <Link to={'/list/no01'}>더 알아보기</Link>
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={'./img/box02_pic02.avif'} alt="향수2" />
                        <figcaption>
                            <p>말로우 온 더 무어 코롱</p>
                            <p>
                                <Link to={'/list/no03'}>더 알아보기</Link>
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>

            {/* box03 */}
            <div id="box03">
                <h2>완벽한 선물</h2>
                <ProductItem data={data}/>
            </div>
        </>
    )
}