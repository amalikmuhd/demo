const Component = () => {
  const position = "relative h-fit min-h-screen w-full overflow-hidden bg-yellow-lighter dark:bg-surface-lowest";

  return (
    <div className={`${position} ${styles.grid}`}>
      <div className={`${styles.boxStyle}`}>
        <div className="md:col-span-4 col-span-2 row-span-5">
          <p className="text-gray-500 text-xl">{"item.subTitle"}</p>
        </div>
        <div className="md:col-span-2 row-span-5">
          <p className="text-gray-500 text-xl">{"item.subTitle"}</p>
        </div>
        <div className="md:col-span-2 row-span-5">
          <p className="text-gray-500 text-xl">{"item.subTitle"}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  parent: "relative h-fit min-h-screen w-full overflow-hidden bg-[#232329]",
  grid: "grid md:grid-cols-4 auto-rows-[100px] gap-4 my-10",
  boxStyle: "bg-neutral-100 border-2 rounded-xl p-2",
};

export default function Application() {
  return (
    <div className="max-w-7xl mx-auto">
      <Component />
    </div>
  );
}
