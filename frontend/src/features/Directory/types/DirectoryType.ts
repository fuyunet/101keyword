export type ParentDirectoryType = {
  name: string;
  children: Array<FolderType>;
};

export type FolderType = {
  name: string;
  type: "folder" | "file";
  children: Array<FileType>;
};

export type FileType = {
  name: string;
};
