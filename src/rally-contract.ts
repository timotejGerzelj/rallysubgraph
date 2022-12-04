import {
  handleAudioChatChangedState as handleAudioChatChangedStateEvent,
  handleEventUpdated as handleEventUpdatedEvent,
  handleNewAudioChat as handleNewAudioChatEvent,
  handleUpdateMetadataCID as handleUpdateMetadataCIDEvent
} from "../generated/RallyContract/RallyContract"
import {
  handleAudioChatChangedState,
  handleEventUpdated,
  handleNewAudioChat,
  handleUpdateMetadataCID
} from "../generated/schema"

export function handlehandleAudioChatChangedState(
  event: handleAudioChatChangedStateEvent
): void {
  let entity = new handleAudioChatChangedState(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.audio_event_id = event.params.audio_event_id
  entity.new_state = event.params.new_state

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlehandleEventUpdated(event: handleEventUpdatedEvent): void {
  let entity = new handleEventUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.audio_event_id = event.params.audio_event_id
  entity.start_at = event.params.start_at
  entity.created_at = event.params.created_at
  entity.cid_metadata = event.params.cid_metadata
  entity.current_state = event.params.current_state
  entity.is_indexed = event.params.is_indexed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlehandleNewAudioChat(event: handleNewAudioChatEvent): void {
  let entity = new handleNewAudioChat(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.audio_event_id = event.params.audio_event_id
  entity.start_at = event.params.start_at
  entity.created_at = event.params.created_at
  entity.cid_metadata = event.params.cid_metadata
  entity.current_state = event.params.current_state
  entity.is_indexed = event.params.is_indexed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlehandleUpdateMetadataCID(
  event: handleUpdateMetadataCIDEvent
): void {
  let entity = new handleUpdateMetadataCID(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.audio_event_id = event.params.audio_event_id
  entity.new_cid = event.params.new_cid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
