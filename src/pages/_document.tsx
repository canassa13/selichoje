import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

          <meta name="title" content="Dólar Hoje: Cotação Comercial e Turismo. Valor e Preço!" />
          <meta name="description" content="Dólar Hoje. Valor da cotação do dólar americano comercial e turismo hoje. Preço do dólar sempre atualizado!" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dolarhoje.com/" />
          <meta property="og:title" content="Dólar Hoje: Cotação Comercial e Turismo. Valor e Preço!" />
          <meta property="og:description" content="Dólar Hoje. Valor da cotação do dólar americano comercial e turismo hoje. Preço do dólar sempre atualizado!" />
          <meta property="og:image" content="https://dolarhoje.com/img/fb-icon.gif" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dolarhoje.com/" />
          <meta property="twitter:title" content="Dólar Hoje: Cotação Comercial e Turismo. Valor e Preço!" />
          <meta property="twitter:description" content="Dólar Hoje. Valor da cotação do dólar americano comercial e turismo hoje. Preço do dólar sempre atualizado!" />
          <meta property="twitter:image" content="https://dolarhoje.com/img/fb-icon.gif" />
        </Head >
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument