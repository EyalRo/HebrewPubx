import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { Grommet, grommet, Header, Button, Text, Page, PageContent, PageHeader } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { Moon, Sun } from 'grommet-icons';

import TootSection from './components/tootSection';

function App() {
  const [dark, setDark] = useState(true);
  const queryClient = new QueryClient()

  return (
    <Grommet full theme={theme} dir='rtl' themeMode={dark ? 'dark' : 'light'}>
      <Page>
        <header className='App-header'>
          <AppBar>
            <Text size='large'>פדעברי: הפדיברס העברי</Text>
            <Button
              a11yTitle={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              icon={dark ? <Moon /> : <Sun />}
              onClick={() => setDark(!dark)}
            />
          </AppBar>
          <PageContent>
            <PageHeader title={'פדעברי: הפדיברס העברי'} />
            <Text>
              בשביל לכתוב סטאטוס חדש, לעשות לייק או לפרסם סטאטוס קיים יש צורך להרשם. קל להרשם בכל אחד מהשרתים של הפדיברס
              העברי. בכדי להרשם, יש לבחור את אחד השרתים:
            </Text>
            <QueryClientProvider client={queryClient}>
              <TootSection />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </PageContent>
        </header>
      </Page>
    </Grommet>
  );
}

export default App;

//////////////////////////////
// Theme for the entire app //
//////////////////////////////
const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#484848',
    },
  },
});

//////////////////////////////
//        Components        //
//////////////////////////////

// Top Bar
const AppBar = (props) => (
  <Header
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    {...props}
  />
);
