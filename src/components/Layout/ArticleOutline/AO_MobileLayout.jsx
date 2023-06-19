import { useContext } from "react";
import Form from "../../UI/ArticleOutline/Form";
import { AdvancedOptionsContext } from "../../../Context/Context";
import SwitchViews from "../../UI/ArticleOutline/SwitchViews";
import OutlineContainer from "../../UI/ArticleOutline/OutlineContainer";

const AO_MobileLayout = ({ toggleLayout, setToggleLayout }) => {
  const { showOptions, switchView, setShowOptions, setSwitchView } = useContext(
    AdvancedOptionsContext
  );
  console.log(switchView);

  function handleToggleLayout() {
    setSwitchView(!switchView);
  }
  return (
    <div className="px-[10%]">
      {switchView ? (
        <section className="w-[100%]">
          <OutlineContainer />
        </section>
      ) : (
        <section className="w-[100%] border border-slate-500">
          <Form />
        </section>
      )}
      <SwitchViews />
    </div>
  );
};

export default AO_MobileLayout;
