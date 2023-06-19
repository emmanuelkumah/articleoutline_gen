import Form from "../../UI/ArticleOutline/Form";

const AO_MobileLayout = ({ toggleLayout, setToggleLayout }) => {
  function handleToggleLayout() {
    setToggleLayout(!toggleLayout);
  }
  return (
    <div className="px-[10%]">
      {toggleLayout ? (
        <section className="w-[100%]  border bg-yellow-300">Content</section>
      ) : (
        <section className="w-[100%] border border-slate-500">
          <Form />
        </section>
      )}
      <button onClick={handleToggleLayout}>Toggle</button>
    </div>
  );
};

export default AO_MobileLayout;
