import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DirectoryStructureType } from "../types/DirectoryType";
import { DirectoryCardPath } from "./DirectoryCardPath";

type DirectoryCardProps = {
  handleAdd: (name: string, type: "file" | "folder", parentId: number) => void;
  directories: DirectoryStructureType;
};

export const DirectoryCard = ({
  handleAdd,
  directories,
}: DirectoryCardProps) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [parentId, setParentId] = useState(0);
  const [type, setType] = useState<"file" | "folder">("folder");

  // const availableFolders = flattenDirectories(directories);

  const onSubmit = () => {
    handleAdd(name, type, parentId);
    setName("");
  };

  const onReset = () => {
    setName("");
    setPath("");
    setParentId(0);
    setType("folder");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Add to directory</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <div>
                <Label htmlFor="type" className="ml-2">
                  Path
                </Label>
                <DirectoryCardPath
                  path={path}
                  parentId={parentId}
                  setPath={setPath}
                  setParentId={setParentId}
                  directories={directories}
                />
              </div>

              <div>
                <Label htmlFor="type" className="ml-2">
                  Type
                </Label>
                <Select
                  onValueChange={(value: "file" | "folder") => {
                    setType(value);
                  }}
                  value={type}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select file or folder" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="folder">Folder</SelectItem>
                    <SelectItem value="file">File</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="name" className="ml-2">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Directory or file name"
                value={name}
                onChange={(data) => setName(data.currentTarget.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center space-x-4">
        <Button variant="outline" onClick={onReset}>
          reset
        </Button>
        <Button onClick={onSubmit}>Add</Button>
      </CardFooter>
    </Card>
  );
};
