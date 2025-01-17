import { FavoriteListItem } from '@/types/interface'
import React from 'react'
import defaultProfileImage from '../../assets/image/default-profile-image.png'
import './style.css'
interface Props{
    favoriteListItem: FavoriteListItem;
}
//          component: Favorit List Item 컴포넌트          //
export default function FavoriteItem({favoriteListItem}:Props) {
    //          properties         //
    const {nickname,profileImage} = favoriteListItem;

//          component: Favorit List Item 렌더링          //
  return (
    <div className='favorite-list-item'>
        <div className='favorite-list-item-profile-box'>
            <div className='favorite-list-item-profile-image' style={{backgroundImage:`url(${profileImage ? profileImage : defaultProfileImage})`}}></div>
        </div>
        <div className='favorite-list-item-nickname'>{nickname}</div>
    </div>
  )
}
