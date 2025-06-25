import formatDate from "../../utils/formatDate";
import StatusTag from "./StatusTag";

// Header icons
import NameIcon from "../../assets/Name.png";
import StatusIcon from "../../assets/Status.png";
import OwnerIcon from "../../assets/Owner.png";
import TagsIcon from "../../assets/Tags.png";
import ModifiedIcon from "../../assets/Modified.png";
import ActionsIcon from "../../assets/Actions.png";

function InvestmentTable({ investments = [], onSelectNode }) {
  if (!investments.length) return null;

  return (
    <div className="mt-8 overflow-x-auto">
      <h3 className="text-[20px] font-medium text-text mb-3">Investments</h3>
      <div className="min-w-[800px] border border-border bg-background rounded-[16px] overflow-hidden">
        <div className="grid grid-cols-6 text-sm font-medium bg-header-bg border-b border-border px-4 py-2 rounded-t-[16px]">
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
            <img src={TagsIcon} alt="Tags" className="w-4 h-4" /> Tags
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
        {investments.map((inv, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 text-sm text-text px-4 py-3 border-t border-border items-start gap-y-2"
          >
            <div
              className="text-text hover:underline hover:text-primary cursor-pointer"
              onClick={() => onSelectNode(inv)}
            >
              {inv.name}
            </div>
            <div>
              <StatusTag status={inv.status} />
            </div>
            <div>{inv.owner}</div>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {inv.tags?.map((tag, i) => (
                <div
                  key={i}
                  className="px-2 py-[4px] bg-focus text-primary rounded-[32px] text-xs"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div>{formatDate(inv.last_modified)}</div>
            <div>
              <button
                className="text-sm text-muted-text hover:underline cursor-pointer"
                onClick={() => onSelectNode(inv)}
              >
                Go to investment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvestmentTable;
