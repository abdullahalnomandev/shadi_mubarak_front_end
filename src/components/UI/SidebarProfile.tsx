import profileImage from "@/assets/girl.jpg";
import { Progress, Tooltip } from "antd";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

const SidebarProfile = () => {
  return (
    <div className="max-w-xs mx-auto  shadow-md p-2 text-center border-b border-gray-200">
      {/* Profile Image */}
      <div className="flex justify-center mb-1">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500">
          <Image
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
            width={96}
            height={96}
          />
        </div>
      </div>

      {/* Status */}
      <Tooltip title="Biodata completion: 50%" placement="bottomRight">
        <Progress
          percent={50}
          status="active"
          // strokeColor={{
          //   from: "#13ce66",
          //   to: "#a2f28d",
          // }}
          percentPosition={{
            align: "end",
            type: "outer",
          }}
        />
      </Tooltip>
      {/* Status */}
      <div className="flex mt-4 justify-center items-center gap-2 pb-4">
        <span className="text-sm text-black  font-medium">Biodata Status:</span>
        <span className="text-sm font-semibold text-yellow-800 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300">
          Not Completed
        </span>
      </div>

      {/* Edit Button */}
      <button className=" cursor-pointer p-2 px-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-md">
        <div className="flex items-center justify-center gap-1">
          <FaRegEdit /> <p> Edit Biodata</p>
        </div>
      </button>
    </div>
  );
};

export default SidebarProfile;

/**
 * 1. Create biodata (not_started)
 * 2. Complite biodata (not_coplited)
 * 3. Submit biodata  (in_progress)
 * 3. My Biodata (completed)
 */
