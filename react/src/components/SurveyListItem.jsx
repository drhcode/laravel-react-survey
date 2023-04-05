import React from "react";
import TButton from "./TButton";
import { PencilIcon } from "@heroicons/react/24/outline";

const SurveyListItem = ({ survey }) => {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md rounded-md bg-white hover:bg-gray-100 h-[470px]">
      <img
        src={survey.image_url}
        alt={survey.title}
        className="w-full h-48 object-cover rounded"
      />
      <h4 className="mt-4">{survey.title}</h4>

      <div
        dangerouslySetInnerHTML={{ __html: survey.description }}
        className="overflow-hidden flex-1"
      ></div>
      <div className="flex justify-between items-center mt-3 ">
        <TButton to={`surveys/${survey.id}`} circle link>
          <PencilIcon className="w-5 h-5 mr-3" />
          Edit
        </TButton>
        // check if survey has id then appear delete button
        {survey.id && (
          <TButton to={`surveys/${survey.id}`} circle link>
            <PencilIcon className="w-5 h-5 mr-3" />
            Delete
          </TButton>
        )}
      </div>
    </div>
  );
};

export default SurveyListItem;
