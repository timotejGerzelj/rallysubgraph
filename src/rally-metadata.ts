import { json, Bytes, dataSource, JSONValue, log } from '@graphprotocol/graph-ts'

import { metadataAudioChat } from '../generated/schema';
import { integer } from '@protofire/subgraph-toolkit';

export function handleMetadata(content: Bytes): void {
    let newMetadata = new metadataAudioChat(dataSource.stringParam());
    log.info("My Id" ,[dataSource.stringParam()])
    if (content) {
      const value = json.fromBytes(content).toObject();
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
        newMetadata.save();
        }
      }
}