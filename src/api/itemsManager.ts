import { getData, saveData } from './dataManager';
import { generateRandomString } from '../utils/randomGenerator';

interface ItemInterface {
  id?: string;
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

  item.id = generateRandomString();

  items.push(item);
  saveData(storageKey, JSON.stringify(items));
};

export { ItemInterface, getItems, saveItem };
