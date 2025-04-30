import ComingSoon from "../components/ui/ComingSoon";
import PageHeader from "../components/ui/PageHeader";

const WinWin = () => {
  return (
    <>
      <div className="p-0">
        <PageHeader welcomeMsg={"A ganar"} />
      </div>
      <ComingSoon color="#c43ea0" />
    </>
  );
};

export default WinWin;
