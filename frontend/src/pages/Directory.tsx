import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { DirectoryCard } from "@/features/Directory/components/DirectoryCard";
import { DirectoryMenu } from "@/features/Directory/components/DirectoryMenu";
import { DirectoryTree } from "@/features/Directory/components/DirectoryTree";
import { ParentDirectoryType } from "@/features/Directory/types/DirectoryType";
import { useState } from "react";

export const Directory = () => {
  const [directories, setDirectories] = useState<ParentDirectoryType>({
    name: "101_keyword",
    children: [],
  });
  const handleAddTest = (
    name: string,
    type: "file" | "folder",
    path: string
  ) => {
    if (type === "folder") {
      setDirectories((prev) => {
        prev.children.push({
          name: name,
          type: "folder",
          children: [],
        });
        return { name: prev.name, children: [...prev.children] };
      });
    } else {
      setDirectories((prev) => {
        const destination = prev.children.find((child) => child.name === path);
        if (destination) destination.children.push({ name: name });
        return { name: prev.name, children: [...prev.children] };
      });
    }
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
            <DirectoryTree directories={directories} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} className="min-w-[240px]">
          <div className="m-4">
            <DirectoryCard
              handleAddTest={handleAddTest}
              directories={directories}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
