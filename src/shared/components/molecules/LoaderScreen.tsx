import Loader from "../atoms/Loader";

export default function LoaderScreen() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-dvh w-full bg-white z-[99]">
      <Loader />
    </div>
  );
}
