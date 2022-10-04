import React from 'react';

import {AppProvider, Card, Stack} from '@shopify/polaris';
import {TextArea} from './TextArea';

import './App.scss';

export default function App() {
  return (
    <AppProvider i18n={[]}>
      <Stack>
        <Card title="Hey there gorgeous">
          <Card.Section>
            <div>I will soon be a picture you can draw on</div>
          </Card.Section>

          <Card.Section flush>
            <div className="CardBackground">
              <TextArea />
            </div>
          </Card.Section>
        </Card>
      </Stack>
    </AppProvider>
  );
}
