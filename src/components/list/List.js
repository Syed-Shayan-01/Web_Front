import React from 'react'
import Item from '../item/Item'
import { Link } from 'react-router-dom'

const List = ({ Itmtext }) => {
    return (
        <Link>
            <ul className='mx-10 font-semibold text-lg'>
                <Item Itmtext={Itmtext} />
            </ul>
        </Link>
    )
}

export default List