
const getStorageItems = () => {
    const getBookItems = localStorage.getItem('books');
    if(getBookItems){
        return JSON.parse(getBookItems);
    }
    return [];
}

const saveBookItems = bookId => {
    const getBookItem = getStorageItems();
    const exists = getBookItem.find(id => id === bookId);
    if(!exists){
        getBookItem.push(bookId);
        localStorage.setItem('books', JSON.stringify(getBookItem));
    }
}

export { getStorageItems, saveBookItems }