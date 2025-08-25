import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory } from "@serenityjs/protocol";

const RubyHoeItemType = new CustomItemType("minecraft:ruby_hoe", { maxStackSize: 1 });

RubyHoeItemType.components.setIcon({ default: "ruby_hoe" });
RubyHoeItemType.components.setDisplayName("Ruby Hoe");
RubyHoeItemType.components.setHandEquipped(true);

RubyHoeItemType.creativeCategory = CreativeItemCategory.Equipment;
RubyHoeItemType.creativeGroup = "itemGroup.name.hoe";

export { RubyHoeItemType };
