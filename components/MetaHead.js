import Head from "next/head";

export default ({ title, description_content }) => (
  <Head>
    <meta charSet="utf-8" />
    <title> {title} </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content={description_content} />
    <meta name="author" content="นายแพทย์ ประเวช ตันติพิวัฒนสกุล" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Trirong"
      rel="stylesheet"
    />
  </Head>
);
