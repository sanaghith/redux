import { DECREMENT, INCREMENT } from "./Type"



export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}