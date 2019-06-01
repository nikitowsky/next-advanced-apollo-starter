import { render, cleanup, waitForElement } from '@testing-library/react';

import Index from '../../pages/index';

afterEach(cleanup);

it('Should render Index page without crash', async () => {
  const { getByText } = render(<Index />);

  await waitForElement(() => getByText(/Hello world!/i));
});
