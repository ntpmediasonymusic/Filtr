import ComingSoon from "../components/ui/ComingSoon";
import PageHeader from "../components/ui/PageHeader";

const Trends = () => {

  return (
    <>
      <div className="p-0">
        <PageHeader welcomeMsg={"Los playlist más Trend"} />
      </div>
      <ComingSoon color="#fddc00" />
    </>
  );
};

export default Trends;
