
const getStoredData = (key) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveData = (key, value) => {
    const storedData = getStoredData(key);
    const isExist = storedData.find(data => data === value);
    if (isExist) {
        return true;
    }
    // let isExist = false;
    // if (!isExist) {
    //     isExist = storedData.find(data => data === value);
    //     // isExist && 'clicked: wishlist/read && item in wishlist/read';
    //     if (isExist) {
    //         return 'wr';
    //     }
    // }
    if (!isExist) {
        storedData.push(value);
        localStorage.setItem(key, JSON.stringify(storedData));
        return false;
    }
}

export { getStoredData, saveData };