import PacmanLoader from "react-spinners/PacmanLoader";

function Loader() {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <PacmanLoader size={80} color="#F92FD3" />
    </div>
  );
}

export default Loader;
