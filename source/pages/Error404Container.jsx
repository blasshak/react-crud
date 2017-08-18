import React from 'react';
import { FormattedMessage } from 'react-intl';
import Menu from './components/Menu';

function Error404Container() {
  return (
    <section name="error404">
      <Menu selected="Error 404" />
      <FormattedMessage id="error404" />
    </section>
  );
}

export default Error404Container;
