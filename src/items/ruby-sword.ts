import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory } from "@serenityjs/protocol";

const RubySwordItemType = new CustomItemType("minecraft:ruby_sword", { maxStackSize: 1 });

RubySwordItemType.components.setIcon({ default: "ruby_sword" });
RubySwordItemType.components.setDisplayName("Ruby Sword");
RubySwordItemType.components.setHandEquipped(true);

RubySwordItemType.creativeCategory = CreativeItemCategory.Equipment;
RubySwordItemType.creativeGroup = "itemGroup.name.sword";

export { RubySwordItemType };
