import './Story.css';
import ProductItem from "../components/ProductItem";
import { Link } from 'react-router-dom';


export default function Story() {
    return (
        <>
            {/* box10 */}
            <div id="box10">
                <div>
                    <div className="title">
                        <h2>하일랜드 컬렉션</h2>
                        <p>리미티드 에디션 컬렉션의 비하인드 스토리. 셀린 루(Céline Roux)와 조향사 앤 플리포(Anne Flipo), 마리 살라먕쥬(Marie Salamagne), 얀 바스니에(Yann Vasnier)가 <Link to={'../list'}>하일랜드 컬렉션</Link>에 대해 이야기합니다.</p>
                    </div>

                    <div className="detailImg">
                        <figure>
                            <img src={'../img/box10_pic01.avif'} alt="이미지1" />
                            <figcaption>
                                <p>네 가지 향으로 구성된 새로운 리미티드 에디션 컬렉션은 스코틀랜드 하일랜드 자연 그대로의 아름다움에서 영감을 받아 울퉁불퉁한 고원, 안개 자욱한 들판, 무너져가는 성과 신비한 호수의 생생한 모습이 떠오르는 독특한 곳입니다. 셀린은 "우리는 '영국의 시골 마을' 하면 좀 더 질서정연하고 단정된 모습을 떠올립니다." 라고 말합니다. "하지만 스코틀랜드 하일랜드는 매우 극적으로 야생적인 자연을 보여줍니다. 이런 모습을 컬렉션에서 표현하고 싶었습니다. 우리가 아무리 자연을 통제하려고 노력해도, 자연 그 자체에 맡겨 두면, 결국 다시 자연이 모든 걸 지배하게 된다는 것을 말이죠."</p>
                                <p>
                                    무너지고 폐허가 된 스코틀랜드 성에서 최초의 영감을 얻은 셀린은 초점을 확장하기 시작했습니다. 셀린은 스코틀랜드의 토착 야생화를 연구하면서 컬렉션의 구성 요소 탐색 과정에서 보라색과 노란색 팔레트를 고안했습니다. 셀린은 “우리는 항상 탐험하고자 하는 하일랜드의 특정 이미지를 갖고 있었습니다. 보랏빛의 헤더로 뒤덮인 안개가 자욱한 들판, 성벽에 엉켜 있는 야생화와 고귀한 티슬, 그리고 스코틀랜드의 거칠고도 아름다운 꽃들." 이라고 말합니다. 우리는 조향사들과 함께 이런 영감들을 프레그런스로 어떻게 표현할지 다양한 아이디어를 떠올렸습니다. 우리가 자연 속에 있다고 상상하면서 후각적인 틀을 깨려고 했죠.”
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

            {/* box11 */}
            <div id="box11">
                <div>
                    <div className="left">
                        <img src={"../img/box11_pic01.avif"} alt="이미지2" />
                        <p>셀린은 조향사 세 명과 협업하며 컬렉션을 통해 풍경의 다양성을 보여주는 동시에 각 조향사의 개인적인 취향을 컬렉션에 반영하고자 했습니다. 앤 플리포는 스코틀랜드의 국화인 티슬에 주목했고, 마리 살라망쥬는 스코틀랜드에서 하이킹을 하며 감탄했던 풍경과 자연의 광물이 주는 느낌에 집중했습니다. 얀 바스니에는 하일랜드의 동식물에 초점을 맞추면서 그만의 접근 방식으로 풍경과 전설을 탐구했습니다. 그 결과 다양하고도 서로 보완적인 향을 만들어냈습니다.</p>
                    </div>

                    <div className="right">
                        <img src={"../img/box11_pic02.avif"} alt="이미지3" />
                        <p>멜랑콜리 티슬은 활달하고 밝은 우디 센트를 담고 있습니다. 앤 플리포는 멜랑콜리 티슬을 “자연 요소들이 자유롭게 흐르고, 깨어진 성벽에는 아이비와 허니서클이 자라나는 하일랜드의 원시 자연에 대한 찬사”라고 설명합니다. "우리는 티슬 어코드에 여러 가지 자연 원소들을 조합하여 스코틀랜드 야생의 느낌을 살려내려고 했습니다. 우디함과 그리너리함이 어우러져 젖은 돌 사이에 자라는 야생화의 느낌을 불러일으켰습니다. 우리는 헤드스페이스 기법(Headspace Technology)을 활용하여 잎이 풍성한 그린 허브 노트를 내뿜는 잉글리시 아이비의 자연스러운 향을 구현했고, 엘레강스함을 위해 네츄럴 파츌리를, 돌 위의 이끼 냄새를 재현하기 위해 쿨 우드라고 불리는 특별한 분자를 추가하였습니다. 스코틀랜드에서 자라는 풍성한 브룸에서 나오는 꿀 같은 터치를 느낄 수 있으며 이 버터리한 노란색 꽃은 벌들이 자주 찾는 원료입니다."</p>
                    </div>
                </div>
            </div>

            {/* 컴포넌트 */}
            <div id="box03">
                <h2>이야기 속 제품 자세히 보기</h2>
                <div id="productItem">
                    <ProductItem />
                </div>
            </div>
        </>
    )
}