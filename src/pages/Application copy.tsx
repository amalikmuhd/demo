// const Component = () => {
//   const boxStyle = "bg-neutral-100 border-2 rounded-xl p-2";
//   return (
//     <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
//       {new Array(10).fill(2).map((d, i) => (
//         <div
//           key={i}
//           className={`${boxStyle}
//         ${i === 0 ? "md:col-span-2" : ""}
//         ${i === 4 ? "md:col-span-2" : ""}
//         ${i === 2 ? "md:row-span-2" : ""}
//         ${i === 5 || i === 6 ? "md:col-span-2" : ""}
//         ${i === 7 && "md:col-span-4"}
//         ${i === 8 && "md:col-span-4"}
//         ${i === 9 && "md:col-span-4"}

//         `}
//         >
//           <p className="text-gray-500 text-xl">Malik{i}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default function Application() {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <Component />
//     </div>
//   );
// }
