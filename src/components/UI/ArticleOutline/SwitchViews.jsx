import { useContext } from "react";
import { AdvancedOptionsContext } from "../../../Context/Context";

const SwitchViews = () => {
  const { switchView, setSwitchView } = useContext(AdvancedOptionsContext);

  const handleSwitchViews = () => {
    setSwitchView(!switchView);
  };
  return (
    <div className="grid place-items-center mt-10">
      <button
        className="rounded bg-gradient-to-r from-indigo-500 to-green-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-3"
        onClick={handleSwitchViews}
      >
        Switch Views
      </button>
    </div>
  );
};

export default SwitchViews;
