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

const data = [
  {
    header: "FOREIGN BANK ACCOUNTS",
    title: "Get a global bank account",
    subTitle: "Get a bank account in just minutes. Receive and access your global payments whenever you want to.",
  },
  {
    header: "CURRENCY EXCHANGE",
    title: "Convert money at the best rate",
    subTitle:
      "Effortlessly exchange major world currencies at the best rates. Convert money from local to foreign and back in a flash.",
  },
  {
    header: "VIRTUAL CARDS",
    title: "Shop and spend globally",
    subTitle: "Make international payments with a virtual debit card that just works.",
  },
];
