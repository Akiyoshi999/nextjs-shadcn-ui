import { Button } from "@/components/ui/button";
import { SquareArrowDown } from "lucide-react";
import { sidebarItems } from "@/constants/index";

export default function Sidebar() {
  return (
    <nav className="md:w-64 p-6 sticky top-20 h-full">
      <ul className="space-y-2">
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <Button className="w-full gap2">
              <SquareArrowDown />
              <span className="hidden md:inline">{item.title}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
