import { render, cleanup } from '@testing-library/react';

import Index from '../../pages/index';

afterEach(cleanup);

// FIXME: Component with localization should be correcly tested
it('Should render index page without crash', () => {
  const { getByText } = render(<Index />);

  expect(getByText(/Hello world!/i)).toBeTruthy();
});
