import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory, WearableSlot } from "@serenityjs/protocol";

const RubyBootsItemType = new CustomItemType("minecraft:ruby_boots", { maxStackSize: 1 });

RubyBootsItemType.components.setIcon({ default: "ruby_boots" });
RubyBootsItemType.components.setDisplayName("Ruby Boots");

RubyBootsItemType.components.setWearable({ slot: WearableSlot.Feet, protection: 3 });
RubyBootsItemType.components.setDurability({ max_durability: 363 });

RubyBootsItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyBootsItemType.creativeGroup = "itemGroup.name.boots";

export { RubyBootsItemType };
