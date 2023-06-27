import { useContext } from "react";
import Form from "../../UI/ArticleOutline/Form";
import { FormOptionsContext } from "../../../Context/Context";
import SwitchViews from "../../UI/ArticleOutline/SwitchViews";
import AO_Container from "../../UI/ArticleOutline/AO_Container";

const AO_MobileLayout = () => {
  const { showOptions, switchView, setShowOptions, setSwitchView } =
    useContext(FormOptionsContext);

  function handleToggleLayout() {
    setSwitchView(!switchView);
  }
  return (
    <div className="px-[10%]">
      {switchView ? (
        <section className="w-[100%]">
          <AO_Container />
        </section>
      ) : (
        <section>
          <Form />
        </section>
      )}
      <SwitchViews />
    </div>
  );
};

export default AO_MobileLayout;
