// Use this reducer for general functions -- logging in, getting user data, ect.

import { GET_USER_PLAYER_CARD, IS_LOADING, NOT_LOADING, GET_CLASSES } from "../actions";

const initialGeneralState = {
  isLoading:false,
  loggedin: false,
  allClasses: [],
  friends: [{
    username:'Vippsi',
    userStatus: true
  },
  {
    username:'Iatechristmas',
    userStatus: true
  },
  {
    username:'meep-morp',
    userStatus: false
  },
  {
    username:'theJeff',
    userStatus: true
  },
  {
    username:'Desypher',
    userStatus: true
  },
  {
    username:'LynxKhaos',
    userStatus: false
  },
  {
    username:'Drankopolis',
    userStatus: true
  },
  {
    username:'That one Guy',
    userStatus: false
  },
  {
    username:'Test User',
    userStatus: true
  },
  {
    username:'Willy',
    userStatus: false
  },

  ],
  users:[
    {
        "id": 1,
        "class": {
            "id": 1,
            "name": "Wizard",
            "base_health": 150,
            "base_mana": 250,
            "base_power": 50
        },
        "nickname": "Jeff's Archer",
        "exp": "1000",
        "health": 230,
        "mana": 320,
        "power": 150,
        "skill_slot1": {
            "id": 1,
            "name": "Fireball",
            "type": "magic",
            "description": "A firey ball",
            "base_power": 100,
            "cost": 50
        },
        "skill_slot2": {
            "id": 2,
            "name": "Lightning",
            "type": "magic",
            "description": "A bolty bolt",
            "base_power": 150,
            "cost": 100
        },
        "skill_slot3": {
            "id": 3,
            "name": "Healing",
            "type": "magic",
            "description": null,
            "base_power": 20,
            "cost": 100
        },
        "consumable_slot1": {
            "id": 1,
            "name": "Bread",
            "description": "Recovers 50 health",
            "effect": "+50"
        },
        "consumable_slot2": {
            "id": 2,
            "name": "Rotten Fish",
            "description": "Makes the user sick.",
            "effect": "-20"
        },
        "consumable_slot3": {
            "id": 1,
            "name": "Bread",
            "description": "Recovers 50 health",
            "effect": "+50"
        },
        "equipment_slot1": {
            "id": 1,
            "name": "Sword",
            "type": "melee",
            "description": "The standard starter weapon",
            "level": 0,
            "quality": 1,
            "base_stat": 1
        },
        "equipment_slot2": {
            "id": 2,
            "name": "Shield",
            "type": "defense",
            "description": "Ye ol' boring shield",
            "level": 1,
            "quality": 1,
            "base_stat": 1
        },
        "equipment_slot3": null
    },
    {
        "id": 2,
        "class": {
            "id": 2,
            "name": "Brute",
            "base_health": 250,
            "base_mana": 50,
            "base_power": 250
        },
        "nickname": null,
        "exp": "0",
        "health": 250,
        "mana": 50,
        "power": 250,
        "skill_slot1": {
            "id": 3,
            "name": "Healing",
            "type": "magic",
            "description": null,
            "base_power": 20,
            "cost": 100
        },
        "skill_slot2": {
            "id": 1,
            "name": "Fireball",
            "type": "magic",
            "description": "A firey ball",
            "base_power": 100,
            "cost": 50
        },
        "skill_slot3": {
            "id": 2,
            "name": "Lightning",
            "type": "magic",
            "description": "A bolty bolt",
            "base_power": 150,
            "cost": 100
        },
        "consumable_slot1": 'health Potion',
        "consumable_slot2": 'bread',
        "consumable_slot3": 'flesh',
        "equipment_slot1": 'Club',
        "equipment_slot2": 'chestplate',
        "equipment_slot3": 'mace'
    }],
    userPlayerCard: {
      class: {},
      skill_slot1: {},
      skill_slot2: {},
      skill_slot3: {},
      consumable_slot1: {},
      consumable_slot2: {},
      consumable_slot3: {},
      equipment_slot1: {},
      equipment_slot2: {},
    },




  
};
export const generalReducer = (state = initialGeneralState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return{
        ...state,
        isLoading: true
      }
      case NOT_LOADING:
        return{
          ...state,
          isLoading: false
        }
    case GET_USER_PLAYER_CARD:
      console.log(action.payload);
      return {
        ...state,
        userPlayerCard: {
          ...action.payload,
          class: action.payload.class,
          skill_slot1: action.payload.skill_slot1,
          skill_slot2: action.payload.skill_slot2,
          skill_slot3: action.payload.skill_slot3,
          consumable_slot1: action.payload.consumable_slot1,
          consumable_slot2: action.payload.consumable_slot2,
          consumable_slot3: action.payload.consumable_slot3,
          equipment_slot1: action.payload.equipment_slot1,
          equipment_slot2: action.payload.equipment_slot2 
        },
      };
      case GET_CLASSES:
        return{
          ...state,
          allClasses:action.payload
        }

    default:
      return state;
  }
};
