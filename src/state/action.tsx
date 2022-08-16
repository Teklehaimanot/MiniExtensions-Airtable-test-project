
import { Istate } from "./ClassReducer"
import axios from "axios"



export interface GetAction {
    type: 'Get_Classes',
    payload: Istate['classes']
}
export interface ResetAction {
    type: 'Reset_Classes'
}
export type Action = GetAction | ResetAction

const getClasses = (classes: Istate['classes']): GetAction => (
    {
        type: 'Get_Classes',
        payload: classes
    }
)

const resetClasses = (): ResetAction => (
    {
        type: 'Reset_Classes'
    }
)

export const fetchClasses = (name: string) => {
    const KEY = process.env.REACT_APP_Key
    const url1 = process.env.REACT_APP_URL1
    const url2 = process.env.REACT_APP_URL2
    const query = '?filterByFormula='
    const filterBy = `Name = "${name}"`
    const link1 = `${url1}`
    const link2 = `${url2}`

    const fetchByClassId = (classId: string) => {
        return axios.get(`${link2}${classId}`, {
            headers: {
                Authorization: `Bearer ${KEY}`
            }
        }
        )
    }
    try {
        return async (dispatch: any) => {
            const res1 = await axios.get(`${link1}${query}${filterBy}`, {
                headers: {
                    Authorization: `Bearer ${KEY}`
                }
            })
            const value = res1.data.records[0].fields.Classes
            const result = await Promise.all(
                value.map(fetchByClassId)
            )
            const classes = result.map(item => item.data)
            dispatch(getClasses(classes))
        }
    } catch (error) {
        console.log(error)

    }
}
