import Head from "next/head";
import Post from "../../layouts/post";
import Editor from "../../components/Editor";
import Button from "../../components/Button";

const Edit = props => (
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
    <Button text="Blog" className="btn btn-primary" />
  </Post>
);

export default Edit;
