import React, {useState} from 'react';
import {
  AddIcon,
  Center,
  HStack,
  Icon,
  Pressable,
  Spinner,
  Text,
} from '@gluestack-ui/themed';
import ListItem from '../components/ListItem/ListItem.tsx';
import {useAddGroceryItem, useGroceryList} from '../queries/useGroceryList.ts';
import Header from '../components/Header/Header.tsx';
import StyledKeyboardAvoidingView from '../components/GestureHandlerRootView/GestureHandlerRootView.tsx';
import StyledSafeAreaView from '../components/StyledSafeAreaView/StyledSafeAreaView.tsx';
import StyledGestureHandlerRootView from '../components/StyledGestureHandlerRootView/StyledGestureHandlerRootView.tsx';
import {StyledScrollView} from '../components/StyledScrollView/StyledScrollView.tsx';

const List = () => {
  const [swipedItemId, setSwipedItemId] = useState<string>();

  const {data: groceryList, isLoading, error} = useGroceryList();
  const addMutation = useAddGroceryItem();

  const addGroceryItem = () => {
    const newItem = {
      id: Date.now().toString(),
      task: '',
      completed: false,
    };

    if (groceryList && groceryList.length > 0) {
      const lastTodo = groceryList[groceryList.length - 1];

      if (lastTodo.task !== '') {
        addMutation.mutate(newItem);
      }
    } else {
      addMutation.mutate(newItem);
    }
  };

  return (
    <StyledKeyboardAvoidingView
      w="$full"
      h="$full"
      bg="$backgroundDark900"
      behavior="padding"
      keyboardVerticalOffset={60}>
      <StyledSafeAreaView bg="$backgroundDark900" w="$full" h="$full">
        <StyledGestureHandlerRootView w="$full" minHeight="$full">
          <Header />
          <StyledScrollView
            pt="$6"
            pb="$10"
            bg="$backgroundDark900"
            w="$full"
            flexDirection="column">
            {isLoading && <Spinner color={'$backgroundDark50'} size="large" />}
            {error && (
              <Center>
                <Text color={'$error900'}>Error loading grocery list</Text>
              </Center>
            )}
            {!isLoading && !error && (
              <>
                {groceryList?.map(item => (
                  <ListItem
                    key={item.id}
                    groceryItem={item}
                    swipedItemId={swipedItemId}
                    setSwipedItemId={setSwipedItemId}
                  />
                ))}
                <Pressable mb="$32" px="$6" onPress={addGroceryItem}>
                  <HStack alignItems="center" mt="$4">
                    <Icon as={AddIcon} color="$secondary600" />
                    <Text ml="$2" fontSize="$sm" color="$textDark50">
                      Add Task
                    </Text>
                  </HStack>
                </Pressable>
              </>
            )}
          </StyledScrollView>
        </StyledGestureHandlerRootView>
      </StyledSafeAreaView>
    </StyledKeyboardAvoidingView>
  );
};

export default List;
