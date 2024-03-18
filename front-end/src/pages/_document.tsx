import { Html, Head, Main, NextScript } from "next/document";
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';

import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';


export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html lang="pt-br">
      <Head>
      <DocumentHeadTags {...props} />
       </Head>
      <body>
        <Main />  
        <NextScript />
      </body>
    </Html>
  )
}