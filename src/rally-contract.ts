import { ipfs, json, JSONValue, Value, store, Bytes} from "@graphprotocol/graph-ts";
import {
  handleNewAudioChat as handleNewAudioChatEvent,
  handleAudioChatUpdated as handleAudioChatUpdated,
  handleAudioChatChangedState as handleAudioChatChangedStates,
  handleAudioChatDeleted as handleAudioChatDeleted,
  handleUpdateMetadataCID
} from "../generated/RallyContract/RallyContract"
import {
  AudioChat,
  AudioChatMetadata
} from "../generated/schema"
import { integer } from "@protofire/subgraph-toolkit";


function processItem(value: JSONValue, userData: Value): void {
  // See the JSONValue documentation for details on dealing
  // with JSON values
  let val = value.toObject()
  let name = val.get("name");
  let description = val.get("description")
  let tags = val.get("tags")
  let image = val.get("image")
  let has_cohosts = val.get("has_cohosts")
  let cohosts_list = val.get("cohosts_list")
  let guests_list = val.get("guests_list")
  let category = val.get("category")
  let is_nsfw = val.get("is_nsfw")
  let will_be_recorded = val.get("will_be_recorded")
  let is_gated = val.get("is_gated")
  let access_control = val.get("access_control")
  if (!val) {
    return
  }
 // let ourObj = ipfs.map('Qm...', 'processItem', Value.fromString(event.params.cid_metadata.toString()), ['json'])

}


export function handlehandleNewAudioChat(event: handleNewAudioChatEvent): void {
  let loadAudioChat = AudioChat.load(event.params.audio_event_id.toHex());
  if (loadAudioChat == null){
    if(event.params.is_indexed){
    let newAudioChat = new AudioChat(event.params.audio_event_id.toHex());
    newAudioChat.start_at = event.params.start_at
    newAudioChat.created_at = event.params.created_at
    newAudioChat.cid_metadata = event.params.cid_metadata
    newAudioChat.state = event.params.current_state
    newAudioChat.is_indexed = event.params.is_indexed
    newAudioChat.creator = event.params.creator
    handleMetadata(newAudioChat.cid_metadata , event.params.audio_event_id)
    newAudioChat.save();      

    }
    }
    

  }

 function handleMetadata(m: string, id: Bytes){
  let newMetadata = new AudioChatMetadata(id.toHex());
  let metadata = ipfs.cat(m + "/data.json");
    if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value){
         let name = value.get("name");
         let description = value.get("description")
         let tags = value.get("tags")
         let image = value.get("image")
         let has_cohosts = value.get("has_cohosts")
         //let cohosts_list = value.get("cohosts_list")
         //let guests_list = value.get("guests_list")
        let category = value.get("category")
        let is_nsfw = value.get("is_nsfw")
        let will_be_recorded = value.get("will_be_recorded")
        let is_gated = value.get("is_gated")
        let max_attendees = value.get("max_attendees");
        if (name) {
          newMetadata.name = name.toString();
        }
        else {
          newMetadata.name = "";
        }
        if(description){
          newMetadata.description = description.toString();
        }
        else {
          newMetadata.description = "";
        }
        if (tags){
          let stringArray: JSONValue[] = tags.toArray() as Array<JSONValue>;
          newMetadata.tags = stringArray.map<string>((val: JSONValue): string => { return val.toString() }); 
        }
        else {
          newMetadata.tags = [];
        }
        if (image){
          newMetadata.image = image.toString();
        }
        else {
          newMetadata.image = "";
        }
        if (has_cohosts){
          newMetadata.has_cohosts = has_cohosts.toBool();

        }
        else {
          newMetadata.has_cohosts = false;
        }
        if (category) {
          newMetadata.category = category.toString()
        }
        else {
          newMetadata.category = "";
        }
        if (is_nsfw){
          newMetadata.is_nsfw = is_nsfw.toBool();
        }
        else {
          newMetadata.is_nsfw = false;
        }
        if (will_be_recorded){
          newMetadata.will_be_recorded = will_be_recorded.toBool()
          
        }
        else {
          newMetadata.will_be_recorded = false
        }
        if (is_gated){
          newMetadata.is_gated = is_gated.toBool()
        }
        else {
          newMetadata.is_gated = false;
        }
        if (max_attendees){
          newMetadata.max_attendees = max_attendees.toBigInt();
          
        }
        else {
          newMetadata.max_attendees = integer.fromNumber(100);
        }
        
        }
      }
 }

  export function handleEventUpdate(event: handleAudioChatUpdated): void {
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
          let metadata = ipfs.cat(event.params.cid_metadata + "/data.json");
   
    }
    loaded.save()
  } 
}

export function handleAudioChatChangedState(event: handleAudioChatChangedStates): void {
  let id = event.params.audio_event_id;
  let loaded = AudioChat.load(id.toHex());
  if (loaded){
  if (loaded.state != event.params.new_state){
    
      loaded.state = event.params.new_state;
      loaded.save();

    }

  }

}

export function handleEventDeleted(event: handleAudioChatDeleted): void{
    let id = event.params.audio_event_id.toHex();
    store.remove('AudioChat', id);
}