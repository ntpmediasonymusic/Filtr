import ComingSoon from "../components/ui/ComingSoon";
import PageHeader from "../components/ui/PageHeader";

const Trending = () => {
  return (
    <>
      <div className="px-6 py-10">
        <PageHeader welcomeMsg={"Los playlist más Trend"} />
      </div>
      <ComingSoon color="#fddc00" />
    </>
  );
};

export default Trending;
