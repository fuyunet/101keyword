import { useRef, useState } from "react";
import { DirectoryStructureType } from "../types/DirectoryType";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";

type DirectoryCardPathProps = {
  parentId: number;
  path: string;
  setParentId: React.Dispatch<React.SetStateAction<number>>;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  directories: DirectoryStructureType;
};

export const DirectoryCardPath = ({
  parentId,
  path,
  setParentId,
  setPath,
  directories,
}: DirectoryCardPathProps) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathOptions = directories.dir[parentId].childIds
    .map((id) => directories.dir[id])
    .filter((dir) => dir.type === "folder");

  const handleSetPath = (name: string) => {
    const dir = pathOptions.find((option) => option.name === name);
    setParentId((prev) => dir?.id ?? prev);
    setPath((prev) => (dir?.name ? prev + dir.name + "/" : prev));
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="w-full"
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          {path}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command className="w-full">
          <CommandInput
            ref={inputRef}
            placeholder="Search directories..."
            onKeyDown={(e) => {
              if (e.code === "Enter" && inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No valid path found.</CommandEmpty>
            <CommandGroup>
              {pathOptions.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.name}
                  onSelect={(value) => {
                    handleSetPath(value);
                  }}
                >
                  {option.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
