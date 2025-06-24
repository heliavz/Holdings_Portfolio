import formatDate from "../../utils/formatDate";

// Header icons
import NameIcon from "../../assets/Name.png";
import OwnerIcon from "../../assets/Owner.png";
import CreatedIcon from "../../assets/Created.png";
import ModifiedIcon from "../../assets/Modified.png";
import ActionsIcon from "../../assets/Actions.png";
import ArrowRightIcon from "../../assets/Arrow-Right(mute).png";

function FilesTable({ files }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <h3 className="text-[20px] font-medium text-text mb-3">Related Files</h3>

      {files.length > 0 ? (
        <div className="min-w-[800px]">
          <div className="grid grid-cols-5 text-sm font-medium text-text border-b border-border pb-2 mb-2">
            <div className="flex items-center gap-1">
              <img src={NameIcon} alt="Name" className="w-4 h-4" />
              Name
            </div>
            <div className="flex items-center gap-1">
              <img src={OwnerIcon} alt="Owner" className="w-4 h-4" />
              Owner
            </div>
            <div className="flex items-center gap-1">
              <img src={CreatedIcon} alt="Created" className="w-4 h-4" />
              Created
            </div>
            <div className="flex items-center gap-1">
              <img src={ModifiedIcon} alt="Modified" className="w-4 h-4" />
              Last Modified
            </div>
            <div className="flex items-center gap-1">
              <img src={ActionsIcon} alt="Actions" className="w-4 h-4" />
              Actions
            </div>
          </div>
          {files.map((file, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 text-sm text-text py-1 border-t border-border"
            >
              <div className="break-words">{file.name}</div>
              <div>{file.owner}</div>
              <div>{formatDate(file.created_at)}</div>
              <div>{formatDate(file.last_modified)}</div>
              <div className="flex items-center gap-2">
                <button className="text-primary hover:underline">
                  Download
                </button>
                <div className="h-[15px] w-px bg-border" />
                <button className="flex items-center text-muted-text hover:underline">
                  Go to directory
                  <img
                    src={ArrowRightIcon}
                    alt="arrow"
                    className="w-4 h-4 ml-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="italic text-muted-text text-[16px]">
          No documents available.
        </p>
      )}
    </div>
  );
}

export default FilesTable;
