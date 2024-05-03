import { Trash2 } from "lucide-react";
import { DirectoryStructureType } from "../types/DirectoryType";

type DirectoryTreeChildProps = {
  directories: DirectoryStructureType;
  handleRemove: (parentId: number, childId: number) => void;
  currentId: number;
  parentId: number;
  depth: number;
  index: number;
  drawLineLeft: Array<boolean>;
};

export const DirectoryTreeChild = ({
  directories,
  handleRemove,
  currentId,
  parentId,
  depth,
  index,
  drawLineLeft,
}: DirectoryTreeChildProps) => {
  const currDir = directories.dir[currentId];
  const childIds = currDir.childIds;
  const parentDir = directories.dir[parentId];
  const dividerElement = Array.from({ length: depth }, (_, i) => {
    return (
      <div
        key={i.toString() + depth.toString()}
        style={{
          marginLeft: i > 0 ? (drawLineLeft[i] ? "2.1em" : "2.4rem") : "1px",
        }}
      >
        {drawLineLeft[i] ? "│" : ""}
      </div>
    );
  });
  const handleDisplayName = () => {
    let displayName = "";

    if (parentDir.childIds.length !== index + 1) {
      displayName = "├── " + currDir.name;
    } else {
      displayName = "└── " + currDir.name;
    }

    displayName += currDir.type === "folder" ? "/" : "";
    return displayName;
  };
  return (
    <>
      <div className="flex mt-1">
        {depth > 0 && dividerElement}
        <div
          className={"flex text-nowrap"}
          style={{ marginLeft: depth > 0 ? "2rem" : "0rem" }}
        >
          {handleDisplayName()}
          <Trash2
            size={"1rem"}
            className="self-center opacity-0 hover:opacity-100"
            onClick={() => handleRemove(parentId, currentId)}
          />
        </div>
      </div>
      {childIds.map((id, index) => {
        const num = index + 1;
        const arr = [...drawLineLeft, currDir.childIds.length !== num];
        return (
          <DirectoryTreeChild
            key={id}
            handleRemove={handleRemove}
            directories={directories}
            currentId={id}
            parentId={currentId}
            depth={depth + 1}
            index={index}
            drawLineLeft={arr}
          />
        );
      })}
    </>
  );
};
