import type { AppPropsWithLayout } from "next/app";
import { NextSeo } from "next-seo";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "@/components/util/google-tag-manager";
import { googleTagManagerId } from "@/types/gtm";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextSeo titleTemplate={"%s| Next microCMS Practice"} />

      {process.env.DEPLOY_ENV === "production" && (
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      )}

      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
