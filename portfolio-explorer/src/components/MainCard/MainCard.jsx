import { useState, useEffect } from "react";

import HoldingIcon from "../../assets/Holding.png";
import FolderIcon from "../../assets/Folder.png";
import FileIcon from "../../assets/File.png";
import StatusTag from "./StatusTag";
import formatDate from "../../utils/formatDate";
import FilesTable from "./FilesTable";
import InvestmentTable from "./InvestmentTable";
import EntityTable from "./EntityTable";
import DirectoryTable from "./DirectoryTable";

function MainCard({ node }) {
  if (!node) return null;

  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    setFadeKey((prev) => prev + 1); // trigger re-mount on node change
  }, [node.name]); // based on unique identifier of node

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
    created_at,
    last_modified,
    children = [],
    type,
  } = node;

  const entities = children.filter((c) => c.type === "entity");
  const investments = children.filter((c) => c.type === "investment");
  const directories = children.filter((c) => c.type === "directory");

  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const collectAllFiles = (n, parent = null) => {
    let files = [];
    if (n.children) {
      for (const child of n.children) {
        if (child.type === "file") {
          files.push({ ...child, directoryNode: parent });
        }
        if (child.children) {
          files = [...files, ...collectAllFiles(child, child)];
        }
      }
    }
    return files;
  };

  const files = collectAllFiles(node, node);

  return (
    <div
      key={fadeKey}
      className="animate-fade-in-down bg-card-bg rounded-[32px] shadow-[0_0_16px_rgba(0,0,0,0.25)] p-8 mt-[56px] ml-[32px] mr-[24px] mb-[80px] flex-1 overflow-x-auto max-w-full"
    >
      {" "}
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
        Created: {formatDate(created_at)} • Last Modified:{" "}
        {formatDate(last_modified)}
      </p>
      {/* Entity Table (only root node) */}
      {type === "entity" && (
        <EntityTable
          entities={entities}
          onSelectNode={(node) =>
            window.dispatchEvent(
              new CustomEvent("select-directory", { detail: node })
            )
          }
        />
      )}
      {/* Investment Table (for entities that have investments) */}
      {type === "entity" && investments.length > 0 && (
        <InvestmentTable
          investments={investments}
          onSelectNode={(node) =>
            window.dispatchEvent(
              new CustomEvent("select-directory", { detail: node })
            )
          }
        />
      )}
      {/* Folders Table */}
      {directories.length > 0 && (
        <DirectoryTable
          directories={directories}
          onSelectNode={(node) =>
            window.dispatchEvent(
              new CustomEvent("select-directory", { detail: node })
            )
          }
        />
      )}
      {/* Related Files Table */}
      <FilesTable
        files={files}
        onNavigateToDirectory={(dirNode) => {
          if (dirNode) {
            window.dispatchEvent(
              new CustomEvent("select-directory", { detail: dirNode })
            );
          }
        }}
        onTriggerToast={showToast}
        onSelectNode={(node) =>
          window.dispatchEvent(
            new CustomEvent("select-directory", { detail: node })
          )
        }
      />
      {type === "file" && (
        <div className="mt-8">
          <h3 className="text-[20px] font-medium text-text mb-4">
            File Actions
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => showToast("Download successful.")}
              className="bg-primary text-white px-4 py-2 rounded-[16px] transition cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:bg-focus hover:text-primary hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            >
              Download
            </button>
            <button
              onClick={() => showToast("Opening file preview...")}
              className="bg-focus text-primary px-4 py-2 rounded-[16px] transition cursor-pointer shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:bg-primary hover:text-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            >
              Preview
            </button>
          </div>
        </div>
      )}
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-primary text-white px-4 py-2 rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.25)] animate-fade-in-out z-[999]">
          {toast}
        </div>
      )}
    </div>
  );
}

export default MainCard;
