import {Box, Heading} from '@gluestack-ui/themed';
import React from 'react';

const Header = () => {
  return (
    <Box px="$6">
      <Heading color="$textDark50" fontWeight="$bold" fontSize="$xl">
        My grocery list
      </Heading>
    </Box>
  );
};

export default Header;
