import React, { Fragment, useState,useEffect } from 'react';
import { Heading, Image } from 'react-bulma-components';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Favorite from '../../common/favorite';

const DivVSpaced = styled.div`
  margin-top: 10px;
`
const Artist = (props) => {

  return (
    <Link to={`/artists/${props.id}`}>
      <Image src={props.photo_url} />
      <DivVSpaced>
        <Heading size={6} className='has-text-white'>{props.name}</Heading>
      </DivVSpaced>
  </Link>
  );
}
export default Artist;