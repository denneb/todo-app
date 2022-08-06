let localStorageResult: any;

export const saveItem = (name: string, item: any) => {
  try {
    console.log(item);
    const stringifiedItem = JSON.stringify(item);
    console.log(JSON.stringify(item));
    localStorage.setItem(name, stringifiedItem);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getItem = (name: string, initialValue: any = '') => {
  try {
    localStorageResult = localStorage.getItem(name);
    let item: any;

    if (!localStorageResult) {
      localStorage.setItem(name, JSON.stringify(initialValue));
      item = JSON.parse(initialValue);
    } else {
      item = JSON.parse(localStorageResult);
    }

    return item;
  } catch (error) {
    return false;
  }
};
