import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  handleAudioChatChangedState,
  handleEventUpdated,
  handleNewAudioChat,
  handleUpdateMetadataCID
} from "../generated/RallyContract/RallyContract"

export function createhandleAudioChatChangedStateEvent(
  audio_event_id: Bytes,
  new_state: i32
): handleAudioChatChangedState {
  let handleAudioChatChangedStateEvent = changetype<
    handleAudioChatChangedState
  >(newMockEvent())

  handleAudioChatChangedStateEvent.parameters = new Array()

  handleAudioChatChangedStateEvent.parameters.push(
    new ethereum.EventParam(
      "audio_event_id",
      ethereum.Value.fromFixedBytes(audio_event_id)
    )
  )
  handleAudioChatChangedStateEvent.parameters.push(
    new ethereum.EventParam(
      "new_state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(new_state))
    )
  )

  return handleAudioChatChangedStateEvent
}

export function createhandleEventUpdatedEvent(
  audio_event_id: Bytes,
  start_at: BigInt,
  created_at: BigInt,
  cid_metadata: string,
  current_state: i32,
  is_indexed: boolean
): handleEventUpdated {
  let handleEventUpdatedEvent = changetype<handleEventUpdated>(newMockEvent())

  handleEventUpdatedEvent.parameters = new Array()

  handleEventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "audio_event_id",
      ethereum.Value.fromFixedBytes(audio_event_id)
    )
  )
  handleEventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "start_at",
      ethereum.Value.fromUnsignedBigInt(start_at)
    )
  )
  handleEventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "created_at",
      ethereum.Value.fromUnsignedBigInt(created_at)
    )
  )
  handleEventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "cid_metadata",
      ethereum.Value.fromString(cid_metadata)
    )
  )
  handleEventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "current_state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(current_state))
    )
  )
  handleEventUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "is_indexed",
      ethereum.Value.fromBoolean(is_indexed)
    )
  )

  return handleEventUpdatedEvent
}

export function createhandleNewAudioChatEvent(
  audio_event_id: Bytes,
  start_at: BigInt,
  created_at: BigInt,
  cid_metadata: string,
  current_state: i32,
  is_indexed: boolean
): handleNewAudioChat {
  let handleNewAudioChatEvent = changetype<handleNewAudioChat>(newMockEvent())

  handleNewAudioChatEvent.parameters = new Array()

  handleNewAudioChatEvent.parameters.push(
    new ethereum.EventParam(
      "audio_event_id",
      ethereum.Value.fromFixedBytes(audio_event_id)
    )
  )
  handleNewAudioChatEvent.parameters.push(
    new ethereum.EventParam(
      "start_at",
      ethereum.Value.fromUnsignedBigInt(start_at)
    )
  )
  handleNewAudioChatEvent.parameters.push(
    new ethereum.EventParam(
      "created_at",
      ethereum.Value.fromUnsignedBigInt(created_at)
    )
  )
  handleNewAudioChatEvent.parameters.push(
    new ethereum.EventParam(
      "cid_metadata",
      ethereum.Value.fromString(cid_metadata)
    )
  )
  handleNewAudioChatEvent.parameters.push(
    new ethereum.EventParam(
      "current_state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(current_state))
    )
  )
  handleNewAudioChatEvent.parameters.push(
    new ethereum.EventParam(
      "is_indexed",
      ethereum.Value.fromBoolean(is_indexed)
    )
  )

  return handleNewAudioChatEvent
}

export function createhandleUpdateMetadataCIDEvent(
  audio_event_id: Bytes,
  new_cid: string
): handleUpdateMetadataCID {
  let handleUpdateMetadataCidEvent = changetype<handleUpdateMetadataCID>(
    newMockEvent()
  )

  handleUpdateMetadataCidEvent.parameters = new Array()

  handleUpdateMetadataCidEvent.parameters.push(
    new ethereum.EventParam(
      "audio_event_id",
      ethereum.Value.fromFixedBytes(audio_event_id)
    )
  )
  handleUpdateMetadataCidEvent.parameters.push(
    new ethereum.EventParam("new_cid", ethereum.Value.fromString(new_cid))
  )

  return handleUpdateMetadataCidEvent
}
