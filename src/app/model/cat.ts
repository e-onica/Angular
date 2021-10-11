export interface NewCat {
    name: string,
    breed: string,
    description?: string,
    image?: string,
    imageAlt?: string,
    likes: number
}

export interface Cat extends NewCat {
    id: number
}
