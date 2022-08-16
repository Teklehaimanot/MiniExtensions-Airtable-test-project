import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { classItem } from '../state/ClassReducer'


interface props {
    item: classItem
}


const ClassItem: React.FC<props> = ({ item }) => {
    const url1 = process.env.REACT_APP_URL1
    const KEY = process.env.REACT_APP_Key
    const [students, setStudents] = useState<any>([])

    useEffect(() => {
        const getStudentList = async () => {
            const studentList = await fetchAllStudents()
            setStudents(studentList)
        }

        getStudentList()
    }, [])

    const fetchStudentById = async (studentId: string) => {
        return await axios.get(`${url1}/${studentId}`, {
            headers: {
                Authorization: `Bearer ${KEY}`
            }
        })
    }
    const fetchAllStudents = async () => {
        try {
            const result = await Promise.all(
                item.fields.Students.map(fetchStudentById)
            )
            const value = result.map((item) => item.data.fields.Name)
            return value
        } catch (error) {
            console.log(error)

        }

    }
    return (
        <div className='Class-Box'>
            <p>Name</p>
            <span>{item.fields.Name}</span>
            <p>Students</p>
            <span>{students.join(' , ')}</span>
        </div>
    )
}

export default ClassItem