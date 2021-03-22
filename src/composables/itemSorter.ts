import { ItemInterface } from '@/api/itemsManager';

enum SortOrder {
  Ascending,
  Descending,
}

const sortByExpirationDate = (
  items: ItemInterface[],
  order: SortOrder = SortOrder.Ascending
): ItemInterface[] => {
  const orderValue = order === SortOrder.Ascending ? -1 : 1;

  return items.sort((a, b) => (a.expirationDate < b.expirationDate ? orderValue : -orderValue));
};

export { SortOrder, sortByExpirationDate };
