import profileImage from "@/assets/girl.jpg";
import { Progress, Tooltip } from "antd";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

const SidebarProfile = () => {
  return (
    <div className="max-w-xs mx-auto mb-1 border-b border-gray-300  p-4 bg-white">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-600 shadow">
          <Image
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Progress & Tip */}
      <div className="mb-2">
        <Tooltip title="Biodata completion: 50%" placement="bottomRight">
          <Progress
            percent={50}
            status="active"
            strokeColor={{
              from: "#06b6d4",
              to: "#3b82f6",
            }}
            percentPosition={{
              align: "end",
              type: "outer",
            }}
          />
        </Tooltip>
        <p className="text-sm text-gray-500 mt-1">Complete your profile</p>
      </div>

      {/* Status */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm font-medium text-gray-700">
          Biodata Status:
        </span>
        <span className="text-xs font-semibold text-yellow-800 bg-yellow-100 px-3 py-0.5 rounded-full border border-yellow-300">
          Not Completed
        </span>
      </div>

      {/* Edit Button */}
      <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow cursor-pointer ">
        <FaRegEdit size={16} />
        Edit Biodata
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
