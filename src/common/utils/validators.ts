export const required = (value: string) => {
    if(value) return undefined
    return "Field is required"
}

export const maxLength = (max: number) => (value: string) => {
    if(value.length > max) return `Value is very long (max length: ${max})`
    return undefined
}