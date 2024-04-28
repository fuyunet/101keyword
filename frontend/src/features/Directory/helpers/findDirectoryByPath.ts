import { ParentDirectoryType } from "../types/DirectoryType";

export function findDirectoryByPath(
  directories: Array<ParentDirectoryType>,
  path: string
): null | ParentDirectoryType {
  for (const directory of directories) {
    for (const child of directory.children) {
      if (child.type === "file") continue;

      if (child.name === path) return directory;

      //   const result = findDirectoryByPath(child.children, path);
      //   if (result) return result;
    }
  }
  return null;
}
