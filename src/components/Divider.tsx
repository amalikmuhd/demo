interface Divider {
  color: string;
}

const Divider = ({ color }: Divider) => {
  return <div className={`bg-[${color}] h-[1px] w-4/4`} />;
};

export default Divider;
