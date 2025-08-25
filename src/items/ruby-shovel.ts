import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory } from "@serenityjs/protocol";

const RubyShovelItemType = new CustomItemType("minecraft:ruby_shovel", { maxStackSize: 1 });

RubyShovelItemType.components.setIcon({ default: "ruby_shovel" });
RubyShovelItemType.components.setDisplayName("Ruby Shovel");
RubyShovelItemType.components.setHandEquipped(true);

RubyShovelItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyShovelItemType.creativeGroup = "itemGroup.name.shovel";

export { RubyShovelItemType };
