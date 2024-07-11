interface CustomInput {
  register: any;
  style?: String;
}

const CustomInput = ({ style, register }: CustomInput) => {
  return <input type="text" {...register("organizationName")} className={style} />;
};

export default CustomInput;
