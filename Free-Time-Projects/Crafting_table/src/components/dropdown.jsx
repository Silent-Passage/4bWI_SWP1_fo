import React, { useState, useEffect, useRef } from "react";
const token = import.meta.env.VITE_GITHUB_TOKEN;

function Dropdown({ setSelectedVersion }) {
  const [versions, setVersions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVersion, setLocalSelectedVersion] = useState("Select Version");
  const dropdownRef = useRef(null);

  // Fetch versions from API
  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    fetch(
      "https://api.github.com/repos/PrismarineJS/minecraft-assets/contents/data/",
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Raw API response:", data);

        if (!Array.isArray(data)) {
          console.error("Unexpected API response:", data);
          return;
        }

        const versionsList = data
          .map((item) => item.name)
          .filter((name) => name.match(/^\d+\.\d+\.\d+$/))
          .sort((a, b) => {
            const aParts = a.split(".").map(Number);
            const bParts = b.split(".").map(Number);

            for (let i = 0; i < 3; i++) {
              const numA = aParts[i] || 0;
              const numB = bParts[i] || 0;
              if (numA !== numB) return numB - numA;
            }
            return 0;
          });

        console.log("Sorted versions:", versionsList);
        setVersions(versionsList);
      })
      .catch((error) => console.error("Error fetching versions:", error));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle version selection
  const handleSelect = (version) => {
    setLocalSelectedVersion(version);
    setSelectedVersion(version);
    setIsOpen(false);
  };

  // Tailwind copy paste
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Toggle Dropdown Button */}
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-300 shadow-sm hover:bg-gray-50"
        onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown
      >
        {selectedVersion}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {versions.length === 0 ? (
              <p className="px-4 py-2 text-sm text-gray-700">Loading...</p>
            ) : (
              versions.map((version) => (
                <button
                  key={version}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleSelect(version)}
                >
                  {version}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
