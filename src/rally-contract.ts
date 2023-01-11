import { ipfs, store, log, json, Bytes, JSONValue} from "@graphprotocol/graph-ts";
import {
  handleNewAudioChat as handleNewAudioChatEvent,
  handleAudioChatUpdated as handleAudioChatUpdated,
  handleAudioChatChangedState as handleAudioChatChangedStates,
  handleAudioChatDeleted as handleAudioChatDeleted,
  handleUpdateMetadataCID
} from "../generated/RallyContract/RallyContract"
import {
  AudioChat, metadataAudioChat
} from "../generated/schema"
import { integer } from "@protofire/subgraph-toolkit";
import { AudioChatMetadataTemplate } from '../generated/templates';


export function handleNewAudioChatIndexed(event: handleNewAudioChatEvent): void {
  let newAudioChat = AudioChat.load(event.params.audio_event_id.toHex());
  if (newAudioChat === null){
    if(event.params.is_indexed){
    newAudioChat = new AudioChat(event.params.audio_event_id.toHex());
    const metadataIpfsHash = `${event.params.cid_metadata}`;
    log.info("My Id" ,[event.params.audio_event_id.toHex()])
    AudioChatMetadataTemplate.create(metadataIpfsHash);  
    newAudioChat.start_at = event.params.start_at
    newAudioChat.created_at = event.params.created_at
    newAudioChat.cid_metadata = event.params.cid_metadata
    newAudioChat.state = event.params.current_state
    newAudioChat.is_indexed = event.params.is_indexed
    newAudioChat.creator = event.params.creator
    newAudioChat.recording_arweave_transaction_id = ""
    newAudioChat.lens_publication_id = ""
    newAudioChat.metadata = event.params.cid_metadata

    newAudioChat.save();  
    }
  }
}
  export function handleAudioChatUpdatedIndexed(event: handleAudioChatUpdated): void {
      let id = event.params.audio_event_id;
      let loaded = AudioChat.load(id.toHex());
      if (loaded){
        if (loaded.created_at != event.params.created_at){
          loaded.created_at = event.params.created_at;
        }
        if (loaded.cid_metadata != event.params.cid_metadata){
          loaded.cid_metadata = event.params.cid_metadata;

        }
        if (loaded.state != event.params.current_state){
          loaded.state = event.params.current_state;
        }
        if( event.params.start_at != loaded.start_at) {
          loaded.start_at = event.params.start_at
        }
        if (loaded.cid_metadata != event.params.cid_metadata){
          loaded.cid_metadata = event.params.cid_metadata;
        }
        if (loaded.recording_arweave_transaction_id != event.params.recording_arweave_transaction_id){
          loaded.recording_arweave_transaction_id = event.params.recording_arweave_transaction_id
        }

        if (loaded.lens_publication_id != event.params.lens_publication_id){
          loaded.lens_publication_id = event.params.lens_publication_id
        }


        loaded.save()
  } 
}

export function handleAudioChatChangedStateIndexed(event: handleAudioChatChangedStates): void {
  let id = event.params.audio_event_id;
  let loaded = AudioChat.load(id.toHex());
  if (loaded){
  if (loaded.state != event.params.new_state){
    
      loaded.state = event.params.new_state;
      loaded.save();

    }

  }

}

export function handleAudioChatDeletedIndexed(event: handleAudioChatDeleted): void{
    let id = event.params.audio_event_id.toHex();
    store.remove('AudioChat', id);
}