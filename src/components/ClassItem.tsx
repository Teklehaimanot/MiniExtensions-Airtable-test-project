import React from 'react'
import { classItem } from '../App'


interface props {
    item: classItem
}


const ClassItem: React.FC<props> = ({ item }) => {
    return (
        <div className='Class-Box'>
            <p>Name</p>
            <span>{item.name}</span>
            <p>Students</p>
            <span>{item.students.join(' , ')}</span>
        </div>
    )
}

export default ClassItem