export type DirectoryStructureType = {
  nextId: number;
  dir: {
    [key: number]: {
      id: number;
      name: string;
      type: "folder" | "file";
      childIds: Array<number>;
    };
  };
};
