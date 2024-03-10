import GlobalStyle from './globalStyle'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Leona Jiang</title>
        <link
          rel="icon"
          href="/profile/images/opening/hamster.png"
          type="image/x-icon"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
