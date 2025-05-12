import React from "react";
import VideoPlayerButton from "../UI/VideoPlayerButton";

const ViewContact = () => {
  return (
    <table className="w-full border-t-3 border-gray-300 border-separate border-spacing-x-0 border-spacing-0.5 border rounded-sm border-t-gray-800 border-b-0 relative z-10">
      <thead>
        <tr>
          <th
            className="w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl font-medium"
            colSpan={2}
          >
            Contact
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="not-odd:bg-gray-100">
          <td className="w-1/2 text-center m-auto border-x-0 border border-gray-300 p-6 align-top">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                Premium Contact Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                To view the contact information of this biodatas parent, youll
                need to use 1 connection credit.
              </p>
              <button className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 cursor-pointer">
                Unlock Contact Details
              </button>
            </div>

            <div className="mt-10 text-center border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-4">
                Need help with connections?
              </h4>
              <VideoPlayerButton
                title="Learn How to unlock contact information"
                videoId="RHuVlgjwOHA"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewContact;
