import "../scss/style.scss";
import fetch from 'isomorphic-unfetch'

const Logs = () => (
  <div>
    <h1>Logs</h1>
  </div>
)

Logs.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/logs/full/json');
  const json = await res.json()
  return { logs: json }
}

export default Logs;
