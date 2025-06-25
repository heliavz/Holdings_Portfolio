import formatDate from "../../utils/formatDate";

// Header icons
import NameIcon from "../../assets/Name.png";
import OwnerIcon from "../../assets/Owner.png";
import CreatedIcon from "../../assets/Created.png";
import ModifiedIcon from "../../assets/Modified.png";
import ActionsIcon from "../../assets/Actions.png";
import ArrowRightIcon from "../../assets/Arrow-Right(mute).png";

// File type icons
import DocIcon from "../../assets/Doc.png";
import PDFIcon from "../../assets/PDF.png";
import XlsxIcon from "../../assets/Xls.png";

function FilesTable({
  files,
  onNavigateToDirectory,
  onTriggerToast,
  onSelectNode,
}) {
  const handleDownload = () => {
    onTriggerToast("Download successful");
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop().toLowerCase();
    switch (ext) {
      case "doc":
      case "docx":
        return DocIcon;
      case "pdf":
        return PDFIcon;
      case "xlsx":
      case "xls":
        return XlsxIcon;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 overflow-x-auto relative">
      <h3 className="text-[20px] font-medium text-text mb-3">Related Files</h3>

      <div className="min-w-[800px]">
        {/* Header row */}
        <div className="grid grid-cols-5 text-sm font-medium text-text border-b border-border pb-2">
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

        {files.length === 0 ? (
          <div className="grid grid-cols-5 text-sm text-muted-text italic text-[16px] py-4">
            <div className="col-span-5 text-center">
              No documents available.
            </div>
          </div>
        ) : (
          files.map((file, idx) => {
            const icon = getFileIcon(file.name);
            return (
              <div key={idx}>
                <div className="grid grid-cols-5 text-sm text-text py-1 items-center">
                  <div
                    className="flex items-center cursor-pointer hover:underline hover:text-primary"
                    onClick={() => onSelectNode(file)}
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt="File type"
                        className="w-4 h-4 mr-1"
                      />
                    )}
                    {file.name}
                  </div>
                  <div>{file.owner}</div>
                  <div>{formatDate(file.created_at)}</div>
                  <div>{formatDate(file.last_modified)}</div>
                  <div className="flex flex-col gap-[2px]">
                    <button
                      className="text-sm text-primary hover:underline hover:cursor-pointer"
                      onClick={handleDownload}
                    >
                      Download
                    </button>
                    <button
                      className="flex items-center text-muted-text text-sm hover:underline hover:cursor-pointer"
                      onClick={() => {
                        if (file.directoryNode) {
                          onNavigateToDirectory(file.directoryNode);
                        }
                      }}
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
            );
          })
        )}
      </div>
    </div>
  );
}

export default FilesTable;
