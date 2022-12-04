import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt } from "@graphprotocol/graph-ts"
import { handleAudioChatChangedState } from "../generated/schema"
import { handleAudioChatChangedState as handleAudioChatChangedStateEvent } from "../generated/RallyContract/RallyContract"
import { handlehandleAudioChatChangedState } from "../src/rally-contract"
import { createhandleAudioChatChangedStateEvent } from "./rally-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let audio_event_id = Bytes.fromI32(1234567890)
    let new_state = 123
    let newhandleAudioChatChangedStateEvent = createhandleAudioChatChangedStateEvent(
      audio_event_id,
      new_state
    )
    handlehandleAudioChatChangedState(newhandleAudioChatChangedStateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("handleAudioChatChangedState created and stored", () => {
    assert.entityCount("handleAudioChatChangedState", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "handleAudioChatChangedState",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "audio_event_id",
      "1234567890"
    )
    assert.fieldEquals(
      "handleAudioChatChangedState",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "new_state",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
