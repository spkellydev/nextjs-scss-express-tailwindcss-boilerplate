import "../scss/style.scss";
import "../scss/pages/index.scss";

const Index = () => (
  <div>
    <div className="flex flex-col">
      <div className="min-h-screen bg-pattern bg-center bg-smoke-light border-t-6 border-tailwind-teal flex items-center justify-center leading-tight p-6 pb-16">
        <p className="example mt-12 font-light text-3xl text-center">
          Hello Next.js with Tailwind CSS
        </p>
      </div>
    </div>
  </div>
);

export default Index;
