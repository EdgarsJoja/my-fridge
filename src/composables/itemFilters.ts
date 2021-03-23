import { ItemInterface } from '@/api/itemsManager';

const searchFilter = (
  items: ItemInterface[],
  search: string
): ItemInterface[] => {
  return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
};

export { searchFilter };
