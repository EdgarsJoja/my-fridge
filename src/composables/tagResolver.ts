import { ItemInterface } from '@/api/itemsManager';

enum ExpirationTags {
  Expired,
  Today,
  Tomorrow,
  Week,
  Default,
}

const getExpirationTag = (expirationDate: Date): ExpirationTags => {
  const now = Date.now();
  const timeDiff = expirationDate.getTime() - now;
  const daysDiff = timeDiff / (1000 * 3600 * 24);

  if (daysDiff < -1) {
    return ExpirationTags.Expired;
  }

  if (daysDiff < 0 && daysDiff > -1) {
    return ExpirationTags.Today;
  }

  if (daysDiff < 1 && daysDiff > 0) {
    return ExpirationTags.Tomorrow;
  }

  if (daysDiff < 7 && daysDiff > 1) {
    return ExpirationTags.Week;
  }

  return ExpirationTags.Default;
};

export { ExpirationTags, getExpirationTag };
