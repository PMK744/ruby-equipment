import { CustomItemType } from "@serenityjs/core";
import { CreativeItemCategory } from "@serenityjs/protocol";

const RubyItemType = new CustomItemType("minecraft:ruby");

RubyItemType.components.setIcon({ default: "ruby" });
RubyItemType.components.setDisplayName("Ruby");

RubyItemType.creativeCategory = CreativeItemCategory.Items;

export { RubyItemType };
