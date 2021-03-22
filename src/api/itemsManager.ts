import { getData, saveData } from './dataManager';

interface ItemInterface {
  id?: number;
  name: string;
  expirationDate: string;
}

const storageKey: string = 'items';

const getItems = (): ItemInterface[] => {
  const items = getData(storageKey);
  return items ? JSON.parse(items) : [];
};

const saveItem = (item: ItemInterface): void => {
  const items = getItems();
  const idsSum = items.reduce((acc, item) => {
    return acc + item.id!;
  }, 0);

  item.id = items.length === 1 ? idsSum + 1 : idsSum;

  items.push(item);
  saveData(storageKey, JSON.stringify(items));
};

export { ItemInterface, getItems, saveItem };
