export type ProductItemMini = {
    id?: string,
    name?: string,
    price?: string,
    image?: string
}

export type ProductItem = ProductItemMini & {
    comments?: string[],
    description?: string,
    hasDiscount?: boolean,
}