import React, { Fragment, useEffect, useState } from 'react';
import CategoriesService from '../../../services/categories';
import { Columns, Image, Section, Heading } from 'react-bulma-components';
import styled from 'styled-components';

const DivVSpaced = styled.div`
 margin-top: 50px;
`
const DivYSpaced = styled.div`
 border-top-color: white !important;
 margin-bottom: 20px;
 margin-top: 50px;
 text-color: white;
 border-bottom-color: white !important;
 border-top-style: solid;
 border-top-width: 1px;

`

const Text = styled.h1`
    padding-top: 10px;
`

const Categories = (props) => {
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        const response = await CategoriesService.index();
        setCategories(response.data['categories'])
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const categories_list = categories.map((category, key) =>
        <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
            <Image src={category.image_url} onClick={() => props.fetchCategorySearch(category.id)}></Image>
        </Columns.Column>
    );

    return (
        <Fragment>
            <DivVSpaced>
                <DivYSpaced className="has-text-white"><Text>Categorias</Text></DivYSpaced>
                <Columns className='is-mobile'>
                    {categories_list}
                </Columns>
            </DivVSpaced>
        </Fragment>
    );
}
export default Categories;