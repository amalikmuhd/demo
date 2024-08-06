import image from "/banner.png";
import individual from "/individual.png";
import organization from "/organization.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <img src={image} />
      </div>

      <div>
        <div className="flex flex-col items-center">
          <div className="w-[65%]">
            <div>
              <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
                <label className="text-left mb-[8px] font-inter font-medium text-[16px]">
                  Welcome to Abuja Geographic Information Systems online application process for the APPLICATION FOR
                  GRANT/REGRANT OF A STATUTORY RIGHT OF OCCUPANCY. Kindly read the declaration below before you proceed.
                </label>
              </div>

              {/* <div className="flex flex-row items-start gap-1 mb-[16px]">
                <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/40">
                  It is a punishable offence to provide any false information and or make any false statements or claim
                  when completing this form. Where it is subsequently discovered that a Certificate of Occupancy was
                  issued based on false or inaccurate information, the Minister may in his sole discretion, revoke such
                  Certificate of Occupancy. The minister reserves the right to reject any application for not properly
                  or fully completed and shall not incur any liability for any such revocation". The information you
                  supply on this form is public knowledge and may be published in the media.
                </label>
              </div> */}
            </div>

            <>
              <div className="flex flex-col justify-center items-center mt-[40px]">
                <label className="text-left font-inter font-normal text-[16px]">
                  Please select your category of application:
                </label>
              </div>

              {/* <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 col-span-12  xl:p-7   lg:col-span-3 md:col-span-6 ">
                  <div className=" mb-6 ">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.66699 12.8162L11.3501 15.4993C11.5616 15.7107 11.9043 15.7109 12.1158 15.4997L17.8753 9.75033M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337Z"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                    Fast Transaction
                  </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
                    {" "}
                    Provides faster transaction, so money arrives in realtime{" "}
                  </p>
                </div> */}

              <div className="flex flex-row gap-3 justify-center mt-[60px]">
                <button
                  className="flex flex-col justify-start gap-1 border border-[#2DAA39] text-[#2DAA39] px-4 py-6 w-[333px] h-[188px] rounded-md transition-all duration-500 hover:scale-105"
                  // className="flex flex-col justify-start gap-1 border border-[#2DAA39] text-[#2DAA39] px-4 py-6 w-[333px] h-[188px] rounded-md transition-shadow  duration-500 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                  onClick={() => navigate("/eligibility", { state: { type: "Individual" } })}
                >
                  <img src={individual} className="w-[40px] h-[40px]" />
                  <p className="text-left">Apply as an Individual</p>
                </button>
                <button
                  className="flex flex-col justify-start gap-1 border border-[#2DAA39] text-[#2DAA39] px-4 py-6 w-[333px] h-[188px] rounded-md transition-all duration-500 hover:scale-105"
                  onClick={() => navigate("/eligibility", { state: { type: "Organisation" } })}
                >
                  <img src={organization} className="w-[40px] h-[40px]" />
                  <p className="text-left">Apply as an Organisation</p>
                </button>
              </div>
            </>
            <div className="flex flex-col justify-center items-center mt-[160px]">
              <label className="text-left font-inter font-normal text-[12px] text-black/30">
                @AGIS 2024 &bull; Powered by Abuja Geographic Information Systems
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
