import React from 'react'
import ClassItem from './ClassItem'
import { Istate as Iprops } from '../App'

const ClassList: React.FC<Iprops> = ({ classes }) => {
    return (
        <>
            {
                classes.map((item) => (
                    <ClassItem item={item} />
                ))
            }

        </>

    )
}

export default ClassList