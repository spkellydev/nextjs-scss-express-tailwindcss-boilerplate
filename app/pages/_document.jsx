import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Colonial Utility</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/spectre.css/dist/spectre.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <script src="https://unpkg.com/pell" />
          <NextScript />
        </body>
      </html>
    );
  }
}
