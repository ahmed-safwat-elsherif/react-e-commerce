export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    e.currentTarget.src = 'assets/products/cart-box.png';
}