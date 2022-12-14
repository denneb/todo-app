let localStorageResult: any;

export const saveItem = (name: string, item: any) => {
  try {
    const stringifiedItem = JSON.stringify([...item]);

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

export const saveString = (name: string, item: string) => {
  try {
    localStorage.setItem(name, item);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getString = (name: string, initialValue: string) => {
  try {
    localStorageResult = localStorage.getItem(name);
    let item: string = initialValue;

    if (!localStorageResult) {
      localStorage.setItem(name, initialValue);
    } else {
      item = localStorageResult;
    }

    return item;
  } catch (error) {
    return '';
  }
};
