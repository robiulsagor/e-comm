export const truncate = (text: string) => {
    if (text.length > 25) {
        const newText = text.slice(0, 25) + "..."
        return newText
    }
    return text
}