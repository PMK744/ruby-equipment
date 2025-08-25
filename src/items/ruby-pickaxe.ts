import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory } from "@serenityjs/protocol";

const RubyPickaxeItemType = new CustomItemType("minecraft:ruby_pickaxe", { maxStackSize: 1 });

RubyPickaxeItemType.components.setIcon({ default: "ruby_pickaxe" });
RubyPickaxeItemType.components.setDisplayName("Ruby Pickaxe");
RubyPickaxeItemType.components.setHandEquipped(true);

RubyPickaxeItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyPickaxeItemType.creativeGroup = "itemGroup.name.pickaxe";

export { RubyPickaxeItemType };
