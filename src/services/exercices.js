export const exercicesServices  = {
    async getAll() {
        try {
            const exercices = await fetch("/exercices.json")
            return await exercices.json()
        } catch (error) {
            return []
        }
    }
}