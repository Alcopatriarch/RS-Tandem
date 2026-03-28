import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export type SidebarItemType = {
  image: OverridableComponent<
    SvgIconTypeMap<Record<string, unknown>, "svg">
  > & {
    muiName: string;
  };
  title: string;
};
