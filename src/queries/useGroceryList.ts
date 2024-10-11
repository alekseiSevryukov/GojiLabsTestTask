import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {
  addGroceryItem,
  fetchGroceryList,
  removeGroceryItem,
  updateGroceryItem,
} from '../api/grocery.ts';

export const useGroceryList = () => {
  return useQuery({queryKey: ['groceryList'], queryFn: fetchGroceryList});
};

export const useAddGroceryItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addGroceryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['groceryList']});
    },
  });
};

export const useRemoveGroceryItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeGroceryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['groceryList']});
    },
  });
};

export const useUpdateGroceryItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateGroceryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['groceryList']});
    },
  });
};
