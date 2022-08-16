import { Action } from "./action"

export interface classItem {
    id: number,
    fields: {
        Name: string
        Students: string[]
    }

}

export interface Istate {
    classes: classItem[]
}

const initialState = {
    classes: []
}
export const ClassReducer = (state: Istate = initialState, action: Action) => {

    switch (action.type) {
        case 'Get_Classes': {
            return { ...state, classes: action.payload }
        }
        case 'Reset_Classes': {
            return { ...state, classes: [] }
        }
        default: return state

    }
}