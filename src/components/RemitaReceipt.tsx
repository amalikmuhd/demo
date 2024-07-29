import CustomButton from "./CustomButton";
import remita from "/receipt.png";

interface RemitaFakeProps {
  handleNext: () => void | undefined;
}

const RemitaReciept = ({ handleNext }: RemitaFakeProps) => {
  const handlePrintImage = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Remita Receipt</title>
            <style>
              body { margin: 0; padding: 0; }
              img { width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${remita}" alt="Receipt Image" />
            <script>
              window.onload = function() {
                window.print();
                window.onafterprint = function() {
                  window.close();
                };
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white">
      {/* Image */}
      <img src={remita} className="w-full h-full object-cover absolute top-0 left-0 z-10" alt="Payment Background" />

      {/* Button */}
      <div className="flex justify-center items-center w-full h-full absolute top-0 left-10 z-20">
        <div className="w-[100%] flex justify-center items-center mt-[50%] gap-4">
          <CustomButton
            name={"PRINT RECIEPT"}
            onClick={handlePrintImage}
            style="flex-[0.2] border-[1px] border-[#2B9D80] w-[100%]"
            backgroundColor="bg-[#2B9D80]"
            paddingVertical="py-[16px]"
            textColor=""
          />
          <CustomButton
            name={"CONTINUE"}
            onClick={handleNext}
            style="flex-[0.2] border-[1px] border-[#2B9D80] w-[100%]"
            backgroundColor="bg-[#2B9D80]"
            paddingVertical="py-[16px]"
            textColor=""
          />
        </div>
      </div>
    </div>
  );
};

export default RemitaReciept;
