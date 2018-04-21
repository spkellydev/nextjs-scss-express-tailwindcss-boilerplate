import "../scss/style.scss";
import "../scss/pages/index.scss";

import HelloWorld from "../components/HelloWorld";

const Index = () => (
  <div className="bg-gray-lightest">
    <div className="flex flex-col">
      <div className="con">
        <HelloWorld />
      </div>
    </div>
  </div>
);

export default Index;
