import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex  justify-center content-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#141c45", "#421785", "#41105f", "#782e9a", "#8a0bf2"]}
      />
    </div>
  );
};

export default Loading;
