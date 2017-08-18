import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import store from './app/configureStore';
import messages from './messages.json';
import Pages from './pages/components/Page';
import Layout from './pages/components/Layout';

function requestHandler(request, response) {
  response.setHeader('Content-Type', 'text/html');
  const locale = request.headers['accept-language'].indexOf('es') >= 0 ? 'es' : 'en';

  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StaticRouter location={request.url} context={context}>
          <Pages />
        </StaticRouter>
      </IntlProvider>
    </Provider>,
  );

  if (context.url) {
    response.writeHead(301, {
      Location: context.url,
    });
    response.end();
  }

  response.write(
    renderToStaticMarkup(
      <Layout title="Aplicación" content={html} />,
    ),
  );
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(8888);
