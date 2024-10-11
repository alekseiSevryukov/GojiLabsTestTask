import React from 'react';
import List from './screens/List.tsx';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <List />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

export default App;
