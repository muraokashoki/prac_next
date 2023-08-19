import type { AppPropsWithLayout } from "next/app";
import { NextSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextSeo titleTemplate={"%s| Next microCMS Practice"} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
