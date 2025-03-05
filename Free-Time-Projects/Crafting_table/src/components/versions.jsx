import { useState, useEffect } from "react";

function Versions({ setSelectedVersion }) {
  const [versions, setVersions] = useState([]); // Fix: useState([]) instead of string

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/PrismarineJS/minecraft-assets/contents/data/"
    )
      .then((response) => response.json())
      .then((data) => {
        const versionsList = data
          .map((item) => item.name)
          .filter((name) => name.match(/^\d+\.\d+\.\d+$/)) // Ensuring only full versions like 1.21.4
          .sort((a, b) => {
            const aParts = a.split(".").map(Number);
            const bParts = b.split(".").map(Number);

            for (let i = 0; i < 3; i++) {
              const numA = aParts[i] || 0; // Default to 0 if missing
              const numB = bParts[i] || 0;
              if (numA !== numB) return numB - numA; // Descending order (latest first)
            }
            return 0;
          });

        console.log("Fetched and sorted versions:", versionsList);
        setVersions(versionsList);
      })
      .catch((error) => console.error("Error loading versions:", error));
  }, []);

  return (
    <div>
      <p>Select Minecraft Version</p>
      <select
        onChange={(e) => setSelectedVersion(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          -- Select a version --
        </option>
        {versions.length === 0 ? (
          <option>Loading versions...</option>
        ) : (
          versions.map((version) => (
            <option key={version} value={version}>
              {version}
            </option>
          ))
        )}
      </select>
    </div>
  );
}

export default Versions;
