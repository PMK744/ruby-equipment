import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory, WearableSlot } from "@serenityjs/protocol";

const RubyHelmetItemType = new CustomItemType("minecraft:ruby_helmet", { maxStackSize: 1 });

RubyHelmetItemType.components.setIcon({ default: "ruby_helmet" });
RubyHelmetItemType.components.setDisplayName("Ruby Helmet");

RubyHelmetItemType.components.setWearable({ slot: WearableSlot.Head, protection: 3 });
RubyHelmetItemType.components.setDurability({ max_durability: 363 });

RubyHelmetItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyHelmetItemType.creativeGroup = "itemGroup.name.helmet";

export { RubyHelmetItemType };
