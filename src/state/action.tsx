
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

    const url1 = 'https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students'
    const url2 = 'https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/'
    const query = '?filterByFormula='
    const filterBy = `Name = "${name}"`
    const KEY = 'keywqP1hV8asNFzQ6'
    const link1 = `${url1}`
    const link2 = `${url2}`

    const fetch = (courseId: string) => {
        return axios.get(`${link2}${courseId}`, {
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
                value.map(fetch)
            )
            const classes = result.map(item => item.data)
            dispatch(getClasses(classes))
        }
    } catch (error) {
        console.log(error)

    }
}
