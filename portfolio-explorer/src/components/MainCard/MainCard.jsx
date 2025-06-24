import HoldingIcon from "../../assets/Holding.png";
import FolderIcon from "../../assets/Folder.png";
import FileIcon from "../../assets/File.png";
import StatusTag from "./StatusTag";
import formatDate from "../../utils/formatDate";
import FilesTable from "./FilesTable";
import InvestmentTable from "./InvestmentTable";
import EntityTable from "./EntityTable";

function MainCard({ node }) {
  if (!node) return null;

  const getIconByType = (type) => {
    switch (type) {
      case "entity-root":
        return HoldingIcon;
      case "directory":
        return FolderIcon;
      case "file":
        return FileIcon;
      default:
        return HoldingIcon;
    }
  };

  const {
    name,
    status,
    industry,
    owner,
    jurisdiction,
    location,
    createdAt,
    modifiedAt,
    children = [],
    type,
  } = node;

  const entities = children.filter((c) => c.type === "entity");
  const investments = children.filter((c) => c.type === "investment");

  // Recursively collect all descendant files
  const collectAllFiles = (n) => {
    let files = [];
    if (n.children) {
      for (const child of n.children) {
        if (child.type === "file") {
          files.push(child);
        }
        if (child.children) {
          files = [...files, ...collectAllFiles(child)];
        }
      }
    }
    return files;
  };

  const files = collectAllFiles(node);

  return (
    <div className="bg-card-bg rounded-[32px] shadow-[0_0_16px_rgba(0,0,0,0.25)] p-8 mt-[56px] ml-[32px] mr-[24px] flex-1 overflow-x-auto max-w-full">
      {/* Header Section */}
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center mr-2">
          <img
            src={getIconByType(node.type)}
            alt={node.type}
            className="w-6 h-6"
          />
        </div>
        <h2 className="text-[24px] font-medium text-text mr-2">{name}</h2>
        {status && <StatusTag status={status} />}
      </div>

      {/* Meta Info */}
      <p className="text-text mb-2">
        {industry} • {jurisdiction} • Owner: {owner}
      </p>
      <p className="text-muted-text">
        Created: {formatDate(createdAt)} • Last Modified:{" "}
        {formatDate(modifiedAt)}
      </p>

      {/* Entity Table (root only) */}
      {type === "entity-root" && <EntityTable entities={entities} />}

      {/* Investment Table (entity only) */}
      {type === "entity" && <InvestmentTable investments={investments} />}

      {/* Related Files Table (for all types) */}
      <FilesTable files={files} />
    </div>
  );
}

export default MainCard;
