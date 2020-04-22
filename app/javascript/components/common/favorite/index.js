import React, { Fragment, useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import FavoritesService from '../../../services/favorites';

const Favorite = (props) => {

    const [favored, setFavored] = useState(props.favored);
    let FavoredButton;
    
    useEffect(() => {
        setFavored(favored);
      }, [props.favorite]);

    if (favored)
        FavoredButton = <FaHeart size='25px' className='has-text-white' onClick={() => disfavor()} />
    else
         FavoredButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favor()} />


    async function disfavor() {
        await FavoritesService.delete(props.kind, props.id);
        setFavored(false);
    }

    async function favor() {
        await FavoritesService.create(props.kind, props.id);
        setFavored(true);
    }
    return (
        <Fragment>
            {FavoredButton}
        </Fragment>
    );
}
export default Favorite;