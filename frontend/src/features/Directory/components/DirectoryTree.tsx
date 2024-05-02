import { DirectoryStructureType } from "../types/DirectoryType";

type DirectoryTreeProps = {
  directories: DirectoryStructureType;
  currentId: number;
  parentId: number;
};

type DirectoryTreeChildProps = {
  directories: DirectoryStructureType;
  currentId: number;
  parentId: number;
  depth: number;
  index: number;
  drawLineLeft: Array<boolean>;
};

export const DirectoryTree = ({
  directories,
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

const DirectoryTreeChild = ({
  directories,
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
          marginLeft: i > 0 ? (drawLineLeft[i] ? "2.1rem" : "2.7rem") : "1px",
        }}
      >
        {drawLineLeft[i] ? "│" : ""}
      </div>
    );
  });
  return (
    <>
      <div className="flex mt-1">
        {depth > 0 && dividerElement}
        <div
          className={"text-nowrap"}
          style={{ marginLeft: depth > 0 ? "2rem" : "0rem" }}
        >
          {parentDir.childIds.length !== index + 1
            ? "├── " + currDir.name + "/"
            : "└── " + currDir.name + "/"}
        </div>
      </div>
      {childIds.map((id, index) => {
        const num = index + 1;
        const arr = [...drawLineLeft, currDir.childIds.length !== num];
        return (
          <DirectoryTreeChild
            key={id}
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
