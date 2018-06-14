import Head from "next/head";

import Post from "../../layouts/post";
import Editor from "../../components/Editor";
import Button from "../../components/Button";

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
        <Button text="Post" className="btn btn-primary" />
      </Post>
    );
  }
}

export default Edit;
