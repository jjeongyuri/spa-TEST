import { json } from 'react-router-dom';
import data from './data.json';

export function getData(keyword){
    if(!keyword) return data;
    return filterByKeyword(data,keyword)
}

function filterByKeyword(item,keyword){
    const lowerd = keyword.toLowerCase();
    return item.filter(({titleEnglish})=>titleEnglish.toLowerCase().includes(lowerd))
}

export function getCoursesBySlug(dataSlug){
    return data.find((data)=>data.slug === dataSlug)
}

// WISHLIST 필요한것
const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem((WISHLIST_KEY) || '{}'));
// console.log(wishlist)

// (Add)
export function addWishList(dataSlug){
    // 1. I don't understand
    wishlist[dataSlug] = true;
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
};

export function getWishList(){
    // 2. I don't understand
   return data.filter((item)=>wishlist[item.slug])
}

// (Delete)
export function deleteWishList(dataSlug){
    // 3. I don't understand
    delete wishlist[dataSlug];
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}