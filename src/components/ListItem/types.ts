import React from 'react';

export interface GroceryItem {
  id: string;
  task: string;
  completed: boolean;
}

export type GroceryList = GroceryItem[];

export interface ListItemProps {
  groceryItem: GroceryItem;
  swipedItemId?: string;
  setSwipedItemId: React.Dispatch<React.SetStateAction<string | undefined>>;
}
