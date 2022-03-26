export const exercicesServices  = {
    async getAll() {
        const exercices = await fetch("/exercices.json")
        return await exercices.json()
    }
}