import React from 'react';
import Provider from '../Provider';
import { render } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge', () => {
  it('should render badge properly', () => {
    let { getByText, getByTestId } = render(
      <Provider>
        <Badge testID="badge">2</Badge>
      </Provider>,
    );
    expect(getByText('2')).toBeTruthy();
    expect(getByTestId('badge')).toBeTruthy();
  });
});
