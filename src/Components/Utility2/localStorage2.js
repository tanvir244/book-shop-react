
const getWishListStorageItems = () => {
    const getWishListBookItems = localStorage.getItem('wishList-books');
    if(getWishListBookItems){
        return JSON.parse(getWishListBookItems);
    }
    return [];
}

const saveWishListBookItems = bookId => {
    const getWishListBookItem = getWishListStorageItems();
    const exists = getWishListBookItem.find(id => id === bookId);
    if(!exists){
        getWishListBookItem.push(bookId);
        localStorage.setItem('wishList-books', JSON.stringify(getWishListBookItem));
    }
}

export { getWishListStorageItems, saveWishListBookItems }