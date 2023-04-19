import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {

    setGoogleTags() {
        if (publicRuntimeConfig.PRODUCTION) {
            return {
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-147955896-1');
        `
            };
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script data-ad-client="ca-pub-6218184931833362" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <React.Fragment>
                        <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                    </React.Fragment>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

