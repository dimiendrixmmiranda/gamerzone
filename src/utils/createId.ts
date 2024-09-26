export function createId(){
    const array = []
    for (let i = 0; i < 5; i++) {
        array.push(Math.round(Math.random() * 9))
    }
    return parseFloat(array.join(''))
}