import { ParentDirectoryType } from "../types/DirectoryType";

type DirectoryTreeProps = {
  directories: ParentDirectoryType;
};

export const DirectoryTree = ({ directories }: DirectoryTreeProps) => {
  return (
    <>
      {directories.name}
      {directories.children.map((child, index) => {
        return (
          <div key={index}>
            <div>
              {directories.children.length !== index + 1
                ? "├── " + child.name + "/"
                : "└── " + child.name + "/"}
            </div>
            {child.children.map((file, index) => (
              <div key={index} className="flex">
                <div className="ml-[1px]">{"│"}</div>
                <div className="ml-10">
                  {child.children.length !== index + 1
                    ? "├── " + file.name
                    : "└── " + file.name}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
