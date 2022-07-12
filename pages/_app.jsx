import { wrapper } from "../src/store";
import "../styles/globals.css";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default wrapper.withRedux(MyApp);
