import { ItemInterface } from '@/api/itemsManager';

const validateSave = (item: ItemInterface): boolean => {
  return !!item.name.trim();
};

export { validateSave };
