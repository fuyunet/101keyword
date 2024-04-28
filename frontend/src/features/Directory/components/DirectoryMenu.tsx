import { ModeToggle } from "@/components/mode-toggle";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";

export const DirectoryMenu = () => {
  return (
    <Menubar className="rounded-none border-x-0 h-12">
      <MenubarMenu>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </MenubarMenu>
    </Menubar>
  );
};
