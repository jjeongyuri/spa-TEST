import { deleteWishList, getWishList } from '../Api/Api';
import './WishListItem.css';



export default function WishListItem({item,setDataFromBy,total,quantity,changeNum}){
    // console.log(item);
    // console.log(setDataFromBy)
    const handelDelete = (dataSlug) => {
        deleteWishList(dataSlug);
        const NestData = getWishList();
        setDataFromBy(NestData);
    };
    
    return(
        <figure>
            <p>
                <img src={item.photoUrl} alt={item.titleEnglish}/>
            </p>
            <figcaption>
                <dl className="leftdl">
                    <dt>{item.titleKorea}</dt>
                    <dd>{item.titleEnglish}</dd>
                    <dd>{item.ml}</dd>
                </dl>

                <dl className="rightdl">
                    <dt>₩{item.price}</dt>
                    <dd>
                        <button type='button'
                                className='minus'
                                onClick={changeNum}
                                >-</button>
                        <p>{quantity}</p>
                        <button type='button'
                                className='plus'
                                
                                >+</button>
                    </dd>
                    <dd>₩{total}</dd>
                    <dd>
                        <button onClick={()=>handelDelete(item.slug)}>삭제</button>
                    </dd>
                </dl>
            </figcaption>
        </figure>
    )
}