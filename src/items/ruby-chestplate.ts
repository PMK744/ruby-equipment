import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory, WearableSlot } from "@serenityjs/protocol";

const RubyChestplateItemType = new CustomItemType("minecraft:ruby_chestplate", { maxStackSize: 1 });

RubyChestplateItemType.components.setIcon({ default: "ruby_chestplate" });
RubyChestplateItemType.components.setDisplayName("Ruby Chestplate");

RubyChestplateItemType.components.setWearable({ slot: WearableSlot.Chest, protection: 3 });
RubyChestplateItemType.components.setDurability({ max_durability: 363 });

RubyChestplateItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyChestplateItemType.creativeGroup = "itemGroup.name.chestplate";

export { RubyChestplateItemType };
