import axios from './index.ts';
import {GroceryItem, GroceryList} from '../components/ListItem/types.ts';
import {AxiosResponse} from 'axios';

export const fetchGroceryList = async () => {
  const {data}: AxiosResponse<GroceryList> = await axios.get('/groceryList');
  return data;
};

export const addGroceryItem = async (newItem: GroceryItem) => {
  await axios.post('/groceryList', newItem);
};

export const removeGroceryItem = async (id: string) => {
  await axios.delete(`/groceryList/${id}`);
};

export const updateGroceryItem = async (updatedItem: GroceryItem) => {
  await axios.put(`/groceryList/${updatedItem.id}`, updatedItem);
};
