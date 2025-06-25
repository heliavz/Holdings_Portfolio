import FolderIcon from "../../assets/Folder.png";
import NameIcon from "../../assets/Name.png";
import TypeIcon from "../../assets/File.png";
import OwnerIcon from "../../assets/Owner.png";
import ActionsIcon from "../../assets/Actions.png";
import ArrowRightIcon from "../../assets/Arrow-Right(mute).png";

function DirectoryTable({ directories }) {
  const handleGoToFolder = (dir) => {
    window.dispatchEvent(new CustomEvent("select-directory", { detail: dir }));
  };

  return (
    <div className="mt-8 overflow-x-auto relative">
      <h3 className="text-[20px] font-medium text-text mb-3">Folders</h3>

      <div className="min-w-[800px]">
        {/* Header row */}
        <div className="grid grid-cols-4 text-sm font-medium text-text border-b border-border pb-2">
          <div className="flex items-center gap-1">
            <img src={NameIcon} alt="Name" className="w-4 h-4" />
            Name
          </div>
          <div className="flex items-center gap-1">
            <img src={TypeIcon} alt="Type" className="w-4 h-4" />
            Type
          </div>
          <div className="flex items-center gap-1">
            <img src={OwnerIcon} alt="Owner" className="w-4 h-4" />
            Owner
          </div>
          <div className="flex items-center gap-1">
            <img src={ActionsIcon} alt="Actions" className="w-4 h-4" />
            Actions
          </div>
        </div>

        {directories.length === 0 ? (
          <div className="grid grid-cols-4 text-sm text-muted-text italic text-[16px] py-4">
            <div className="col-span-4 text-center">
              No directories available.
            </div>
          </div>
        ) : (
          directories.map((dir, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-4 text-sm text-text py-1">
                <div className="flex items-center">
                  <img src={FolderIcon} alt="Folder" className="w-4 h-4 mr-1" />
                  {dir.name}
                </div>
                <div>{dir.type}</div>
                <div>{dir.owner}</div>
                <div>
                  <button
                    onClick={() => handleGoToFolder(dir)}
                    className="flex items-center text-muted-text hover:underline hover:cursor-pointer"
                  >
                    Go to folder
                    <img
                      src={ArrowRightIcon}
                      alt="arrow"
                      className="w-4 h-4 ml-1"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[226px] mx-auto h-px bg-border opacity-50 scale-y-[0.5]" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DirectoryTable;
