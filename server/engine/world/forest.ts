import { Town } from "../town/town"
import { randomRange, randomValue } from "../rolls"
import { locations } from "./locations"
import { encounters } from "./encounters"
import { rt } from "../tools/randomTemplate"
import { Biome } from "../../../shared/types"

export const forest = {
  create(town: Town) {
    let encounter: string
    let location: string

    if (randomRange(1, 100) >= 50) {
      location = randomValue(this.location)
      encounter = locations[location](town, Biome.Forest)
    } else {
      location = randomValue(this.encounters)
      encounter = encounters[location](town)
    }

    return rt`${[`While`, `As`, `After a while, as`]} you ${[
      `traverse`,
      `trudge along in`,
      `travel through`,
      `walk through`,
    ]} the forest, you see ${this.landmark}. You notice ${this.feature}. Up ahead, you see ${encounter}`
  },
  location: [
    `a cavern behind a waterfall`,
    `a small cave in the bank of a creek`,
    `an entrance to a rocky cave`,
    `a hole under a large tree`,
    `a large burrow`,
    `a peculiar cottage`,
    `a woodsman's cabin`,
    `an abandoned cabin`,
    `an abandoned campsite`,
    `a sacred grove`,
    `a grave with an illegible headstone`,
    `ancient ruins`,
    `a shrine`,
  ],
  landmark: [
    `a fruit tree`,
    `a large, hollow tree`,
    `a pair of trees from the same root`,
    `a tree growing over a boulder`,
    `a clearing with wildflowers`,
    `a grassy clearing`,
    `a moss-covered boulder`,
    `a thicket of brambles`,
    `a babbling brook`,
    `a brook in a deep ravine`,
    `a brook, with gentle rapids`,
    `a dry creekbed`,
    `a small pool at a creek's bend`,
    `a patch of mushrooms`,
    `an enormous mushroom`,
    `a large, hollow log`,
    `a large, rotting log`,
    `a tree felled by lightning`,
    `an old gnarled tree`,
    `the stump of an enormous tree`,
  ],
  feature: [
    `a flock of birds scatter`,
    `a hawk cries`,
    `a woodpecker drumming`,
    `an owl hoots`,
    `birds chirping`,
    `a chipmunk scurrying`,
    `a deer dashes away`,
    `a deer watches curiously`,
    `a squirrel leaps from one tree to another`,
    `a wolf howls`,
    `butterflies fluttering about`,
    `squirrels chittering`,
    `an eerie silence`,
    `the breeze stops`,
    `the wind blows harder`,
    `a twig snaps`,
    `brightly, colored berries`,
    `leaves rustling`,
    `the scent of flowers`,
    `the smell of decay`,
  ],
  trees: [
    `apple or pear trees`,
    `ashes`,
    `birches`,
    `beeches`,
    `cedars or junipers`,
    `cherry or plum trees`,
    `chestnut or hazel trees`,
    `cypresses`,
    `elms`,
    `firs`,
    `hawthorns or hemlocks`,
    `hickory or walnut trees`,
    `linden or lime trees`,
    `maples`,
    `oaks`,
    `pines`,
    `poplars`,
    `spruces`,
    `willows`,
    `yew or holly trees`,
  ],
  cave: [
    `a bear’s lair`,
    `lots of bats`,
    `many spider webs`,
    `a troll's stash`,
    `an ogre's lair`,
    `some goblins' hideout`,
    `some abandoned mining equipment`,
    `bare rock`,
    `a potable spring`,
    `unidentifiable remains`,
    `some outlaws’ hideout`,
    `a strange hermit`,
  ],
  encounters: [
    `a large bear`,
    `a bear cub`,
    `a giant spider`,
    `several giant spiders`,
    `a pack of wolves`,
    `a lone wolf`,
    `a hunting cat`,
    `a wailing ghost`,
    `a malevolent ghost`,
    `a pair of goblin scouts`,
    `a goblin patrol`,
    `an ogre`,
    `a pair of outlaws`,
    `a beggarly bandit`,
    `an old witch`,
    `a curious herbalist`,
    `a lost child`,
    `a woodcutter busy with the day’s work`,
    `an intrepid hunter`,
    `an elvish ranger`,
  ],
  cottageLives: [
    `a lonely old woman`,
    `a reclusive shapeshifter`,
    `an eccentric healer`,
    `a beautiful witch`,
    `a horrible witch`,
    `an outcast dwarf`,
  ],
  cabinLives: [`an owlbear`, `an ogre`, `a troll`, `a mad witch`, `a paranoid shapeshifter`, `restless ghosts`],
  ruinsLives: [
    `a dwarf prospector`,
    `a wood elf druid`,
    `poisonous snakes`,
    `giant spiders`,
    `hungry zombies`,
    `restless ghosts`,
    `a handful of ogres`,
    `some irritable trolls`,
    `a pair of manticores`,
    `a dragon`,
  ],
  camped: [
    `a merchant of exotic goods`,
    `a misanthropic shapeshifter`,
    `an eccentric monk`,
    `a nomadic herder`,
    `a nomadic warrior`,
    `an outcast elf`,
  ],
  cabinLived: [
    `a lonely old woman`,
    `a reclusive scholar`,
    `an eccentric healer`,
    `a poor woodcutter`,
    `a fur trader`,
    `a dwarf prospector`,
  ],
  ruinsLived: [
    `dwarvish miners`,
    `a wood elf king`,
    `a high elf prince`,
    `a dragon cult`,
    `a death cult`,
    `shadow monks`,
    `a long-dead emperor`,
    `a forgotten king`,
    `an evil queen`,
    `a dark sorcerer`,
  ],
  hole: [`a snake`, `a spider`, `a badger`, `earthworms`, `a centipede`, `unusual fungus`],
}
