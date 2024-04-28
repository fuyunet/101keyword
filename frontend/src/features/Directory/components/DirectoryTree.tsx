import { ParentDirectoryType } from "../types/DirectoryType";

type DirectoryTreeProps = {
  directories: ParentDirectoryType;
};

export const DirectoryTree = ({ directories }: DirectoryTreeProps) => {
  return (
    <>
      <div className="font-extrabold mb-2">{directories.name}</div>
      <div className="ml-[1px]">│</div>
      {directories.children.map((child, index) => {
        return (
          <div key={index}>
            <div className="mt-1 text-nowrap">
              {directories.children.length !== index + 1
                ? "├── " + child.name + "/"
                : "└── " + child.name + "/"}
            </div>
            {child.children.map((file, index) => (
              <div key={index} className="flex mt-1">
                <div className="ml-[1px]">{"│"}</div>
                <div className="ml-10 text-nowrap">
                  {child.children.length !== index + 1
                    ? "├── " + file.name + ".tsx"
                    : "└── " + file.name + ".tsx"}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
