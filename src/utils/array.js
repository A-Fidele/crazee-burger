export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const removeObjectById = (array, idOfObjecToDelete) => {
   return  array.filter((product) => product.id !== idOfObjecToDelete)
}

export const findObjectById = (array, idOfObjectToFind) => {
    return array.find((product) => product.id === idOfObjectToFind)
}

export const findObjectIndexById = (array, idOfObjectToFind) => {
    return array.findIndex((product) => product.id === idOfObjectToFind)
}