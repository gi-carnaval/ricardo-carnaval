import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ricardo-carnaval"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=ricardo-carnaval"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
