import { ParentDirectoryType } from "../types/DirectoryType";

export function flattenDirectories(directories: ParentDirectoryType) {
  const result: Array<string> = [];
  directories.children.forEach((child) => {
    if (child.type === "folder") result.push(child.name);
  });

  return result;
}
