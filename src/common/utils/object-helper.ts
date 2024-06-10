export const changeObjectInArray = (items: any[], itemId: number, newObjProps: any) => {
    return items.map(u => u.id === itemId ? {...u, ...newObjProps} : u)
}