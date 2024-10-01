import { ProductType } from "../typeScript/ProductType"

export const deepClone = (array: ProductType[]): ProductType[] => {
    return JSON.parse(JSON.stringify(array))
}

export const removeObjectById = (array: ProductType[], idOfObjecToDelete: ProductType['id']): ProductType[] => {
    return array.filter((product) => product.id !== idOfObjecToDelete)
}

export const findObjectById = (array: ProductType[], idOfObjectToFind: ProductType['id']): ProductType => {
    return array.find((product) => product.id === idOfObjectToFind)
}

export const findObjectIndexById = (array: ProductType[], idOfObjectToFind: ProductType['id']) => {
    return array.findIndex((product) => product.id === idOfObjectToFind)
}

export const isEmpty = (array: ProductType[]): boolean => {
    return array.length === 0
}

export const isUndefined = (array: ProductType[]): boolean => {
    return array === undefined
}