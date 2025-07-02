import { useState, useEffect } from "react";
import SearchIcon from "../../assets/Search.png";
import data from "../../data/file-structure.json";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const flattenTree = (node) => {
    let nodes = [node];
    if (node.children) {
      for (const child of node.children) {
        nodes = [...nodes, ...flattenTree(child)];
      }
    }
    return nodes;
  };

  const allNodes = flattenTree(data);

  const handleSearch = (q) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const lower = q.toLowerCase();
    const filtered = allNodes.filter((node) => {
      return (
        node.name.toLowerCase().includes(lower) ||
        node.type?.toLowerCase().includes(lower) ||
        node.owner?.toLowerCase().includes(lower)
      );
    });

    setResults(filtered.slice(0, 10)); // limit to top 10
    setShowResults(true);
  };

  const handleSelect = (node) => {
    window.dispatchEvent(new CustomEvent("select-directory", { detail: node }));
    window.dispatchEvent(
      new CustomEvent("expand-tree-to-node", { detail: node.name })
    );
    setQuery("");
    setShowResults(false);
  };

  useEffect(() => {
    const close = () => setShowResults(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div className="flex flex-col relative items-start justify-between px-6 mt-[56px] w-full gap-2 z-50">
      <div className="flex items-center flex-grow mr-2 h-[48px] rounded-[32px] border border-border bg-white focus-within:border-primary focus-within:shadow-[0_0_8px_rgba(0,0,0,0.25)] transition-all duration-300 w-full">
        <img src={SearchIcon} alt="Search" className="w-6 h-6 ml-4" />
        <div className="h-[38px] w-px bg-border mx-2" />
        <input
          type="text"
          placeholder="search ..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="text-muted font-light text-[12px] placeholder:text-muted outline-none bg-transparent w-full pr-4"
        />
      </div>

      {showResults && results.length > 0 && (
        <ul className="absolute top-[60px] left-6 right-[72px] bg-white border border-border rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-50">
          {results.map((r, idx) => (
            <li
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(r);
              }}
              className="px-4 py-2 text-sm text-text cursor-pointer hover:bg-focus hover:text-primary transition"
            >
              {r.name}{" "}
              <span className="text-muted-text text-xs ml-1">({r.type})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
