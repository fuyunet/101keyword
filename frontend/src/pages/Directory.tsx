import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { DirectoryCard } from "@/features/Directory/components/DirectoryCard";
import { DirectoryMenu } from "@/features/Directory/components/DirectoryMenu";
import { DirectoryTree } from "@/features/Directory/components/DirectoryTree";
import { DirectoryStructureType } from "@/features/Directory/types/DirectoryType";
import { useState } from "react";

export const Directory = () => {
  const [directories, setDirectories] = useState<DirectoryStructureType>({
    nextId: 1,
    dir: {
      0: {
        id: 0,
        name: "101Keyword",
        type: "folder",
        childIds: [],
      },
    },
  });
  const handleAdd = (
    name: string,
    type: "file" | "folder",
    parentId: number
  ) => {
    const newId = directories.nextId;
    setDirectories((prev) => ({
      nextId: prev.nextId + 1,
      dir: {
        ...prev.dir,
        [parentId]: {
          ...prev.dir[parentId],
          childIds: [...prev.dir[parentId].childIds, newId],
        },
        [newId]: {
          id: newId,
          name: name,
          type: type,
          childIds: [],
        },
      },
    }));
  };

  return (
    <>
      <DirectoryMenu />
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-sm my-4 border"
      >
        <ResizablePanel defaultSize={50} className="min-w-[75px]">
          <div className="ml-2">
            <DirectoryTree
              directories={directories}
              currentId={0}
              parentId={0}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} className="min-w-[220px]">
          <div className="m-4">
            <DirectoryCard handleAdd={handleAdd} directories={directories} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
