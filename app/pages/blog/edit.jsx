import Head from "next/head";
import Post from "../../layouts/post";
import Editor from "../../components/Editor";

const Edit = () => (
  <Post>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/pell/dist/pell.min.css"
      />
    </Head>
    <h1>Edit Blog Post</h1>
    <Editor />
  </Post>
);

export default Edit;
