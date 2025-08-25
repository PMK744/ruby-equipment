import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory, WearableSlot } from "@serenityjs/protocol";

const RubyLeggingsItemType = new CustomItemType("minecraft:ruby_leggings", { maxStackSize: 1 });

RubyLeggingsItemType.components.setIcon({ default: "ruby_leggings" });
RubyLeggingsItemType.components.setDisplayName("Ruby Leggings");

RubyLeggingsItemType.components.setWearable({ slot: WearableSlot.Legs, protection: 3 });
RubyLeggingsItemType.components.setDurability({ max_durability: 363 });

RubyLeggingsItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyLeggingsItemType.creativeGroup = "itemGroup.name.leggings";

export { RubyLeggingsItemType };
