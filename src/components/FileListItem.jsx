import React from "react";
import Icon from "./Icon";

function FileListItem({fileName, mascot, isLocal, onDelete, onDownload, downloadPercentage}) {
  return (
    <li 
      className="w-full h-12 px-4 py-3 mb-2 hover:bg-blue-50 rounded-lg cursor-pointer group relative" 
      onClick={(e)=>{
        if(isLocal) {
          onDelete(e);
        } else if (downloadPercentage == 0) {
          onDownload(e);
        }
      }}
      >
        <div className="flex"> 
            <span>{mascot}</span>
            <span className="ml-4 text-slate-400 group-hover:text-slate-600 font-medium truncate">{fileName}</span>
            <span className="ml-auto text-slate-400 group-hover:text-slate-600 flex align-items-center">
            {downloadPercentage > 0 ? (
              <>
                <Icon name="loading" />
              </>
            ) : (
              <>
                {isLocal ? <Icon name="delete" /> : <Icon name="download" /> }
              </>
            )}
            </span>
            {downloadPercentage > 0 && (
            <div className="absolute h-full top-0 left-0 bg-blue-100 rounded-lg -z-10" style={{width: `${downloadPercentage}%`}}></div>
            )}
        </div>
        
    </li>
  )
};



export default FileListItem