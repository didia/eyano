import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Passero+One|Roboto:300,300i,400,400i,700,900"
            rel="stylesheet"
          />
          <style>
            {`
            html {
              line-height: 1.15; /* 1 */
              -webkit-text-size-adjust: 100%; /* 2 */
            }

            body {
              margin: 0;
              font-family: Roboto;
              background-color: #f4f4f4;
            }

            h1 {
              font-size: 2em;
              margin: 0.67em 0;
            }

            hr {
              box-sizing: content-box; /* 1 */
              height: 0; /* 1 */
              overflow: visible; /* 2 */
            }

            pre {
              font-family: monospace, monospace; /* 1 */
              font-size: 1em; /* 2 */
            }

            abbr[title] {
              border-bottom: none; /* 1 */
              text-decoration: underline; /* 2 */
              text-decoration: underline dotted; /* 2 */
            }

            b,
            strong {
              font-weight: bolder;
            }

            code,
            kbd,
            samp {
              font-family: monospace, monospace; /* 1 */
              font-size: 1em; /* 2 */
            }

            small {
              font-size: 80%;
            }

            sub,
            sup {
              font-size: 75%;
              line-height: 0;
              position: relative;
              vertical-align: baseline;
            }

            sub {
              bottom: -0.25em;
            }

            sup {
              top: -0.5em;
            }

            img {
              border-style: none;
            }

            button,
            input,
            optgroup,
            select,
            textarea {
              font-family: inherit; /* 1 */
              font-size: 100%; /* 1 */
              line-height: 1.15; /* 1 */
              margin: 0; /* 2 */
              border: none;
              outline: none;
            }

            button,
            input { /* 1 */
              overflow: visible;
            }

            button,
            select { /* 1 */
              text-transform: none;
            }

            button,
            [type="button"],
            [type="reset"],
            [type="submit"] {
              -webkit-appearance: button;
            }

            button::-moz-focus-inner,
            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner {
              border-style: none;
              padding: 0;
            }

            button:-moz-focusring,
            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring {
              outline: 1px dotted ButtonText;
            }

            fieldset {
              padding: 0.35em 0.75em 0.625em;
            }

            legend {
              box-sizing: border-box; /* 1 */
              color: inherit; /* 2 */
              display: table; /* 1 */
              max-width: 100%; /* 1 */
              padding: 0; /* 3 */
              white-space: normal; /* 1 */
            }

            progress {
              vertical-align: baseline;
            }

            textarea {
              overflow: auto;
            }

            [type="number"]::-webkit-inner-spin-button,
            [type="number"]::-webkit-outer-spin-button {
              height: auto;
            }

            [type="search"] {
              -webkit-appearance: textfield; /* 1 */
              outline-offset: -2px; /* 2 */
            }

            [type="search"]::-webkit-search-decoration {
              -webkit-appearance: none;
            }

            ::-webkit-file-upload-button {
              -webkit-appearance: button; /* 1 */
              font: inherit; /* 2 */
            }

            details {
              display: block;
            }

            summary {
              display: list-item;
            }

            template {
              display: none;
            }

            html,
            body,
            div,
            span,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            abbr,
            code,
            em,
            img,
            small,
            strong,
            sub,
            sup,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            footer,
            header,
            nav,
            section,
            time,
            audio,
            video {
              padding: 0;
              border: 0;
              margin: 0;
              background: transparent;
              font-size: 100%;
              font-weight: inherit;
              vertical-align: baseline;
            }

            article,
            aside,
            figure,
            footer,
            header,
            nav,
            section {
              display: block;
            }

            html {
              box-sizing: border-box;
              overflow-y: scroll;
            }

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }

            img,
            object {
              max-width: 100%;
            }

            ul {
              list-style: none;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            th {
              font-weight: bold;
              vertical-align: bottom;
            }

            td {
              font-weight: normal;
              vertical-align: top;
            }

            input,
            select {
              vertical-align: middle;
            }

            input[type='radio'] {
              vertical-align: text-bottom;
            }

            input[type='checkbox'] {
              vertical-align: bottom;
            }

            strong {
              font-weight: bold;
            }

            label,
            input[type='file'] {
              cursor: pointer;
            }

            input,
            select,
            textarea {
              border: 0;
              margin: 0;
            }

            button,
            input[type='button'],
            input[type='submit'] {
              padding: 0;
              border: 0;
              border-radius: 0;
              margin: 0;
              background: transparent;
              cursor: pointer;
            }

            button::-moz-focus-inner {
              padding: 0;
              border: 0;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
