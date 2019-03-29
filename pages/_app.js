import React from "react";
import App, { Container } from "next/app";
import "bulma/css/bulma.css";
import "antd/dist/antd.css";
import "../css/index.css";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import combinedStores from "stores";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(combinedStores)(MyApp);
