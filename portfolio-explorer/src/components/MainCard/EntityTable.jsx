import formatDate from "../../utils/formatDate";
import StatusTag from "./StatusTag";

// Header icons
import NameIcon from "../../assets/Name.png";
import StatusIcon from "../../assets/Status.png";
import OwnerIcon from "../../assets/Owner.png";
import IndustryIcon from "../../assets/Industry.png";
import CreatedIcon from "../../assets/Created.png";
import ModifiedIcon from "../../assets/Modified.png";
import ActionsIcon from "../../assets/Actions.png";
import ArrowRightIcon from "../../assets/Arrow-Right(mute).png";

function EntityTable({ entities = [], onSelectNode }) {
  if (!entities.length) return null;

  return (
    <div className="mt-8 overflow-x-auto">
      <h3 className="text-[20px] font-medium text-text mb-3">Entities</h3>
      <div className="min-w-[800px] border border-border bg-background rounded-[16px] overflow-hidden">
        <div className="grid grid-cols-7 text-sm font-medium bg-header-bg border-b border-border px-4 py-2 rounded-t-[16px]">
          <div className="flex items-center gap-1">
            <img src={NameIcon} alt="Name" className="w-4 h-4" /> Name
          </div>
          <div className="flex items-center gap-1">
            <img src={StatusIcon} alt="Status" className="w-4 h-4" /> Status
          </div>
          <div className="flex items-center gap-1">
            <img src={OwnerIcon} alt="Owner" className="w-4 h-4" /> Owner
          </div>
          <div className="flex items-center gap-1">
            <img src={IndustryIcon} alt="Industry" className="w-4 h-4" />{" "}
            Industry
          </div>
          <div className="flex items-center gap-1">
            <img src={CreatedIcon} alt="Created" className="w-4 h-4" /> Created
          </div>
          <div className="flex items-center gap-1">
            <img src={ModifiedIcon} alt="Modified" className="w-4 h-4" /> Last
            Modified
          </div>
          <div className="flex items-center gap-1">
            <img src={ActionsIcon} alt="Actions" className="w-4 h-4" />
            Actions
          </div>
        </div>
        {entities.map((e, idx) => (
          <div
            key={idx}
            className="grid grid-cols-7 text-sm text-text px-4 py-2 border-t border-border items-center"
          >
            <div
              className="text-text hover:underline hover:text-primary cursor-pointer"
              onClick={() => onSelectNode(e)}
            >
              {e.name}
            </div>
            <div>
              <StatusTag status={e.status} />
            </div>
            <div>{e.owner}</div>
            <div>{e.industry}</div>
            <div>{formatDate(e.created_at)}</div>
            <div>{formatDate(e.last_modified)}</div>
            <div>
              <button
                className="flex items-center text-sm text-muted-text hover:underline cursor-pointer"
                onClick={() => onSelectNode(e)}
              >
                Go to entity
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
    </div>
  );
}

export default EntityTable;
