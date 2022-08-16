import React from 'react'
import ClassItem from './ClassItem'
import { Istate as Iprops } from '../state/ClassReducer'

const ClassList: React.FC<Iprops> = ({ classes }) => {
    return (
        <>
            {
                classes.map((item) => (
                    <ClassItem key={item.id} item={item} />
                ))
            }

        </>

    )
}

export default ClassList