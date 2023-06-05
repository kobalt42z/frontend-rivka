export const dateFormatter = (serializedDate: string): string => {
    const date = new Date(serializedDate)
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    let str = `${day < 10 ? "0" + day : day} /${month < 10 ? '0' + month : month}/ ${year} `
    return str
}