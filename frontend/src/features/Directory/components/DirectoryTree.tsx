import { DirectoryStructureType } from "../types/DirectoryType";
import { DirectoryTreeChild } from "./DirectoryTreeChild";

type DirectoryTreeProps = {
  directories: DirectoryStructureType;
  handleRemove: (parentId: number, childId: number) => void;
  currentId: number;
  parentId: number;
};

export const DirectoryTree = ({
  directories,
  handleRemove,
  currentId,
  parentId,
}: DirectoryTreeProps) => {
  const currDir = directories.dir[currentId];
  const childIds = currDir.childIds;
  return (
    <>
      <div className="font-extrabold ddmb-2">{currDir.name}</div>
      {childIds.length > 0 && (
        <>
          <div className="ml-[1px]">│</div>
          {childIds.map((id, index) => {
            const num = index + 1;
            return (
              <DirectoryTreeChild
                key={id}
                handleRemove={handleRemove}
                directories={directories}
                currentId={id}
                parentId={parentId}
                depth={0}
                index={index}
                drawLineLeft={[childIds.length !== num]}
              />
            );
          })}
        </>
      )}
    </>
  );
};
