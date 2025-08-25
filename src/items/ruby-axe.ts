import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory } from "@serenityjs/protocol";

const RubyAxeItemType = new CustomItemType("minecraft:ruby_axe", { maxStackSize: 1 });

RubyAxeItemType.components.setIcon({ default: "ruby_axe" });
RubyAxeItemType.components.setDisplayName("Ruby Axe");
RubyAxeItemType.components.setHandEquipped(true);

RubyAxeItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyAxeItemType.creativeGroup = "itemGroup.name.axe";

export { RubyAxeItemType };
