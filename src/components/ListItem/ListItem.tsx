import React, {useState} from 'react';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import {
  Button,
  Input,
  InputField,
  Checkbox,
  CheckIcon,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import {ListItemProps} from './types.ts';
import {
  useRemoveGroceryItem,
  useUpdateGroceryItem,
} from '../../queries/useGroceryList.ts';

const ListItem = ({
  groceryItem,
  swipedItemId,
  setSwipedItemId,
}: ListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editItem, setEditItem] = useState(groceryItem.task);

  const removeMutation = useRemoveGroceryItem();
  const updateMutation = useUpdateGroceryItem();

  const handleDelete = () => {
    removeMutation.mutate(groceryItem.id);
  };

  const toggleCheckbox = () => {
    updateMutation.mutate({...groceryItem, completed: !groceryItem.completed});
  };

  const handleEdit = () => {
    if (editItem !== '') {
      updateMutation.mutate({...groceryItem, task: editItem});
    } else {
      setEditItem(groceryItem.task);
    }
  };

  const handleSwipeStart = () => {
    if (groceryItem.id !== swipedItemId) {
      setSwipedItemId(groceryItem.id);
    }
    setIsOpen(true);
  };

  const handleSwipeClose = () => {
    setSwipedItemId(undefined);
    setIsOpen(false);
  };

  const renderRightActions = () => {
    if (swipedItemId !== undefined && swipedItemId !== groceryItem.id) {
      return null;
    }
    return (
      <Button
        zIndex={9999}
        h="$full"
        bg="$error900"
        borderRadius="$none"
        onPress={handleDelete}
        focusable={false}>
        <Text color={'$textDark50'} fontSize="$sm">
          Delete
        </Text>
      </Button>
    );
  };

  return (
    <Swipeable
      onSwipeableWillOpen={handleSwipeStart}
      onSwipeableWillClose={handleSwipeClose}
      renderRightActions={renderRightActions}
      friction={1}
      overshootRight={false}>
      <Pressable
        px="$6"
        py="$2"
        minHeight={38}
        flexDirection="row"
        bg={'$backgroundDark900'}
        key={groceryItem.id}
        alignItems="center"
        focusable={false}>
        <Checkbox
          isChecked={groceryItem.completed}
          value={groceryItem.task}
          onChange={toggleCheckbox}
          size="sm"
          borderColor="transparent">
          <Checkbox.Indicator>
            <Checkbox.Icon
              color="$textDark50"
              bg={'$backgroundDark900'}
              borderColor={'$textDark50'}
              as={CheckIcon}
            />
          </Checkbox.Indicator>
        </Checkbox>
        <Input borderWidth="$0" w="$full" h={22}>
          <InputField
            py="$0"
            editable={!isOpen}
            value={editItem}
            color="$textDark50"
            fontSize="$sm"
            fontWeight="$normal"
            textDecorationLine={groceryItem.completed ? 'line-through' : 'none'}
            onChangeText={val => setEditItem(val)}
            onSubmitEditing={handleEdit}
            onBlur={handleEdit}
            autoComplete="off"
          />
        </Input>
      </Pressable>
    </Swipeable>
  );
};

export default ListItem;
