// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AudioChat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AudioChat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AudioChat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AudioChat", id.toString(), this);
    }
  }

  static load(id: string): AudioChat | null {
    return changetype<AudioChat | null>(store.get("AudioChat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get start_at(): BigInt {
    let value = this.get("start_at");
    return value!.toBigInt();
  }

  set start_at(value: BigInt) {
    this.set("start_at", Value.fromBigInt(value));
  }

  get created_at(): BigInt {
    let value = this.get("created_at");
    return value!.toBigInt();
  }

  set created_at(value: BigInt) {
    this.set("created_at", Value.fromBigInt(value));
  }

  get cid_metadata(): string {
    let value = this.get("cid_metadata");
    return value!.toString();
  }

  set cid_metadata(value: string) {
    this.set("cid_metadata", Value.fromString(value));
  }

  get state(): i32 {
    let value = this.get("state");
    return value!.toI32();
  }

  set state(value: i32) {
    this.set("state", Value.fromI32(value));
  }

  get is_indexed(): boolean {
    let value = this.get("is_indexed");
    return value!.toBoolean();
  }

  set is_indexed(value: boolean) {
    this.set("is_indexed", Value.fromBoolean(value));
  }

  get creator(): Bytes | null {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes | null) {
    if (!value) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromBytes(<Bytes>value));
    }
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }
}

export class AudioChatMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AudioChatMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AudioChatMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AudioChatMetadata", id.toString(), this);
    }
  }

  static load(id: string): AudioChatMetadata | null {
    return changetype<AudioChatMetadata | null>(
      store.get("AudioChatMetadata", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (!value) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(<Array<string>>value));
    }
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get has_cohosts(): boolean {
    let value = this.get("has_cohosts");
    return value!.toBoolean();
  }

  set has_cohosts(value: boolean) {
    this.set("has_cohosts", Value.fromBoolean(value));
  }

  get category(): string | null {
    let value = this.get("category");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set category(value: string | null) {
    if (!value) {
      this.unset("category");
    } else {
      this.set("category", Value.fromString(<string>value));
    }
  }

  get is_nsfw(): boolean {
    let value = this.get("is_nsfw");
    return value!.toBoolean();
  }

  set is_nsfw(value: boolean) {
    this.set("is_nsfw", Value.fromBoolean(value));
  }

  get will_be_recorded(): boolean {
    let value = this.get("will_be_recorded");
    return value!.toBoolean();
  }

  set will_be_recorded(value: boolean) {
    this.set("will_be_recorded", Value.fromBoolean(value));
  }

  get is_gated(): boolean {
    let value = this.get("is_gated");
    return value!.toBoolean();
  }

  set is_gated(value: boolean) {
    this.set("is_gated", Value.fromBoolean(value));
  }

  get max_attendees(): BigInt {
    let value = this.get("max_attendees");
    return value!.toBigInt();
  }

  set max_attendees(value: BigInt) {
    this.set("max_attendees", Value.fromBigInt(value));
  }
}
