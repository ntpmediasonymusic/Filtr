import ComingSoon from "../components/ui/ComingSoon";
import PageHeader from "../components/ui/PageHeader";

const WinWin = () => {
  return (
    <>
      <div className="px-6 py-10">
        <PageHeader welcomeMsg={"A ganar"} />
      </div>
      <ComingSoon color="#c43ea0" />
    </>
  );
};

export default WinWin;
