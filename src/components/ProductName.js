import { useNavigate } from 'react-router-dom';
import './ProductName.css';
import { addWishList } from '../Api/Api';



export default function ProductName({item}){
    const navigate = useNavigate();
    const handeleWishList = () => {
        addWishList(item.slug);
        navigate('/wishlist');
    }
    return(
        <div>
            <div className="pic">
                <img src={item.photoUrl} alt={item.titleEnglish}/>
            </div>

            <div className="info">
                <dl>
                    <dt>신제품</dt>
                    <dd>{item.titleEnglish}</dd>
                    <dd>{item.titleKorea}</dd>
                    <dd>₩{item.price}</dd>
                    <dd>
                        <span>{item.title}</span>
                        {item.summary}
                    </dd>
                </dl>
                <p>
                    <button type="button"
                            onClick={handeleWishList}>장바구니 담기</button>
                </p>
            </div>
        </div>
    )
}