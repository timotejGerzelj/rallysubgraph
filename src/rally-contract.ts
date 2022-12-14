import { ipfs, json, JSONValue, Value, store} from "@graphprotocol/graph-ts";
import {
  handleNewAudioChat as handleNewAudioChatEvent,
  handleAudioChatUpdated as handleAudioChatUpdated,
  handleAudioChatChangedState as handleAudioChatChangedStates,
  handleAudioChatDeleted as handleAudioChatDeleted
} from "../generated/RallyContract/RallyContract"
import {
  AudioChat,
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
    let metadata = ipfs.cat(event.params.cid_metadata + "/data.json");
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
          newAudioChat.name = name.toString();
        }
        else {
          newAudioChat.name = "";
        }
        if(description){
          newAudioChat.description = description.toString();
        }
        else {
          newAudioChat.description = "";
        }
        if (tags){
          let stringArray: JSONValue[] = tags.toArray() as Array<JSONValue>;
          newAudioChat.tags = stringArray.map<string>((val: JSONValue): string => { return val.toString() }); 
        }
        else {
          newAudioChat.tags = [];
        }
        if (image){
          newAudioChat.image = image.toString();
        }
        else {
          newAudioChat.image = "";
        }
        if (has_cohosts){
          newAudioChat.has_cohosts = has_cohosts.toBool();

        }
        else {
          newAudioChat.has_cohosts = false;
        }
        if (category) {
          newAudioChat.category = category.toString()
        }
        else {
          newAudioChat.category = "";
        }
        if (is_nsfw){
          newAudioChat.is_nsfw = is_nsfw.toBool();
        }
        else {
          newAudioChat.is_nsfw = false;
        }
        if (will_be_recorded){
          newAudioChat.will_be_recorded = will_be_recorded.toBool()
          
        }
        else {
          newAudioChat.will_be_recorded = false
        }
        if (is_gated){
          newAudioChat.is_gated = is_gated.toBool()
        }
        else {
          newAudioChat.is_gated = false;
        }
        if (max_attendees){
          newAudioChat.max_attendees = max_attendees.toBigInt();
          
        }
        else {
          newAudioChat.max_attendees = integer.fromNumber(100);
        }
        
        }
      }
      newAudioChat.save();      

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
          loaded.name = name.toString();
        }
        else {
          loaded.name = "";
        }
        if(description){
          loaded.description = description.toString();
        }
        else {
          loaded.description = "";
        }
        if (tags){
          let stringArray: JSONValue[] = tags.toArray() as Array<JSONValue>;
          loaded.tags = stringArray.map<string>((val: JSONValue): string => { return val.toString() }); 
        }
        else {
          loaded.tags = [];
        }
        if (image){
          loaded.image = image.toString();
        }
        else {
          loaded.image = "";
        }
        if (has_cohosts){
          loaded.has_cohosts = has_cohosts.toBool();

        }
        else {
          loaded.has_cohosts = false;
        }
        if (category) {
          loaded.category = category.toString()
        }
        else {
          loaded.category = "";
        }
        if (is_nsfw){
          loaded.is_nsfw = is_nsfw.toBool();
        }
        else {
          loaded.is_nsfw = false;
        }
        if (will_be_recorded){
          loaded.will_be_recorded = will_be_recorded.toBool()
          
        }
        else {
          loaded.will_be_recorded = false
        }
        if (is_gated){
          loaded.is_gated = is_gated.toBool()
        }
        else {
          loaded.is_gated = false;
        }
        if (max_attendees){
          loaded.max_attendees = max_attendees.toBigInt();
          
        }
        else {
          loaded.max_attendees = integer.fromNumber(100);
        }
        }
      }
      
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