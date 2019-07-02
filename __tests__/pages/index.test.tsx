import { render, cleanup } from '@testing-library/react';

import Index from '../../pages/index';

afterEach(cleanup);

it('Should render index page without crash', () => {
  const { getByText } = render(<Index />);

  expect(getByText(/Hello world!/i)).toBeTruthy();
});
