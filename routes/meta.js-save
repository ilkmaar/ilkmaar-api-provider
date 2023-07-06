const express = require('express');
const router = express.Router();

areas = [
    {
    "area": "Waiting Room",
    "dataSources": [
        {
        "source": "Visitor Log"
        },
        {
        "source": "Waiting Room Magazine: Top 10 Foods for Creature Mood"
        },
        {
        "source": "Creature Comfort Catalog"
        },
        {
        "source": "Creature Needs and Preferences Manual"
        }
    ]
    },
    {
    "area": "Treatment Rooms",
    "dataSources": [
        {
        "source": "Lab Slips"
        },
        {
        "source": "Transfer Records"
        },
        {
        "source": "Medical Records"
        },
        {
        "source": "Creature Health Textbook"
        },
        {
        "source": "Anomalies Bulletin Board"
        }
    ]
    },
    {
    "area": "Potions Lab",
    "dataSources": [
        {
        "source": "Potions Cook Book"
        },
        {
        "source": "Potion Maker's Diary"
        },
        {
        "source": "Research Data"
        },
        {
        "source": "Potioncrafting Data"
        },
        {
        "source": "Inventory Efficiency Review"
        }
    ]
    },
    {
    "area": "Potions Office",
    "dataSources": [
        {
        "source": "Top 10 Healthiest Creatures Poster"
        },
        {
        "source": "Hall of Healing Heroes"
        },
        {
        "source": "Potions Hospital Annual Report"
        }
    ]
    },
    {
        "area": "Crafting Workshop",
        "dataSources": [
          {
            "source": "Crafting Manual"
          },
          {
            "source": "Recipe Book"
          },
          {
            "source": "Gift Success Rate Records"
          },
          {
            "source": "Material Compatibility Chart"
          },
          {
            "source": "Quality Inspection Reports"
          }
        ]
    },
    {
        "area": "Trade Post",
        "dataSources": [
          {
            "source": "Trade Records"
          },
          {
            "source": "Creature Order Requests"
          },
          {
            "source": "Customer Satisfaction Surveys"
          },
          {
            "source": "Popular Items List"
          },
          {
            "source": "Inventory Management System"
          }
        ]
      },
      {
        "area": "Community Meeting Place",
        "dataSources": [
          {
            "source": "Creature Social Network Diagram"
          },
          {
            "source": "Creature Habit Calendar"
          },
          {
            "source": "Community Engagement Report"
          },
          {
            "source": "Creatures' Gift Preferences Directory"
          }
        ]
      },
      {
        "area": "Island Newspaper",
        "dataSources": [
          {
            "source": "Creature Mood Barometer"
          },
          {
            "source": "Faction Relations Update"
          },
          {
            "source": "Island Infrastructure Report"
          },
          {
            "source": "Biome Health Index"
          },
          {
            "source": "Foraging Activity Log"
          },
          {
            "source": "Daily Weather Forecast"
          },
          {
            "source": "Island Event Calendar"
          },
          {
            "source": "Featured Creature Interview"
          },
          {
            "source": "Success Stories"
          },
          {
            "source": "Advice Column for Crafters"
          },
          {
            "source": "Trade Post Market Trends"
          }
        ]
      },
      {
        "area": "Misc",
        "dataSources": [ // creatureLookup, creatureHealth, creatureMood, happiestCreatures, triageList
            {
                "source": "Creature Factions Lookup Book",
                "endpoint": "/creatures/creatureLookup"
            },
            {
                "source": "Health Oracle",
                "endpoint": "/creatures/creatureHealth"
            },
            {
                "source": "Mood Oracle",
                "endpoint": "/creatures/creatureMood"
            },
            {
                "source": "Top 10 Happiest Creatures",
                "endpoint": "/creatures/happiestCreatures"
            },
            {
                "source": "Triage List",
                "endpoint": "/creatures/triageList"
            },
            {
                "source": "Cook Book",
                "endpoint": "/crafting/cookBook"
            },
            {
                "source": "Extremely Useful Cook Book",
                "endpoint": "/crafting/goodCookBook"
            },
            {
                "source": "Cauldron",
                "endpoint": "/crafting/cauldronManual"
            },
            {
                "source": "Foraging Log",
                "endpoint": "/players/foraging"
            },
            {
                "source": "Gifting Log",
                "endpoint": "/players/gifting"
            },
            {
                "source": "Crafting Log",
                "endpoint": "/players/crafting"
            },
            {
                "source": "Trash",
                "endpoint": "/players/trash"
            },
            {
                "source": "All-Player Shared Gifting Log",
                "endpoint": "/players/allPlayerGiftingLog"
            },
            {
                "source": "Resource Finder",
                "endpoint": "/foraging/resourceFinder"
            }
          ]
        }
]

// /info 
//-- mapAreas, visitorLog

// /players 
//--  /, foraging, gifting, crafting, trash, allPlayerGiftingLog

// /creatures 
//-- /, creatureLookup, creatureHealth, creatureMood, happiestCreatures, triageList, interactions, gifts

// /crafting 
//-- cookBook, goodCookBook, cauldronManual

// /foraging
//-- resourceFinder


tables = {
  "collections": {
    "displayName": "Collections",
    "columns": [
      {
        "name": "collection_id",
        "displayName": "Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "collection_name",
        "displayName": "Collection Name",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "collection_type",
        "displayName": "Collection Type",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "crafting_events": {
    "displayName": "Crafting Events",
    "columns": [
      {
        "name": "crafting_event_id",
        "displayName": "Crafting Event Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "crafting_event_time",
        "displayName": "Crafting Event Time",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "crafting_event_skill_level",
        "displayName": "Crafting Event Skill Level",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_id",
        "displayName": "Recipe Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "recipes",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "item_transfer_id",
        "displayName": "Item Transfer Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "item_transfers",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "crafting_table_collection_id",
        "displayName": "Crafting Table Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "recipes": {
    "displayName": "Recipes",
    "columns": [
      {
        "name": "recipe_id",
        "displayName": "Recipe Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_name",
        "displayName": "Recipe Name",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_category",
        "displayName": "Recipe Category",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_temp",
        "displayName": "Recipe Temp",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_difficulty",
        "displayName": "Recipe Difficulty",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_base_mood_effect",
        "displayName": "Recipe Base Mood Effect",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_base_health_effect",
        "displayName": "Recipe Base Health Effect",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "item_transfers": {
    "displayName": "Item Transfers",
    "columns": [
      {
        "name": "item_transfer_id",
        "displayName": "Item Transfer Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "item_transfer_time",
        "displayName": "Item Transfer Time",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "source_collection_id",
        "displayName": "Source Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "destination_collection_id",
        "displayName": "Destination Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "item_id",
        "displayName": "Item Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "items",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "items": {
    "displayName": "Items",
    "columns": [
      {
        "name": "item_id",
        "displayName": "Item Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "item_quality",
        "displayName": "Item Quality",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_id",
        "displayName": "Recipe Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "recipes",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "collection_id",
        "displayName": "Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "creature_sightings": {
    "displayName": "Creature Sightings",
    "columns": [
      {
        "name": "creature_sighting_id",
        "displayName": "Creature Sighting Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_sighting_time",
        "displayName": "Creature Sighting Time",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_id",
        "displayName": "Creature Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "creatures",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "location_group_id",
        "displayName": "Location Group Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "location_groups",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "creatures": {
    "displayName": "Creatures",
    "columns": [
      {
        "name": "creature_id",
        "displayName": "Creature Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_name",
        "displayName": "Creature Name",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_faction",
        "displayName": "Creature Faction",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_color",
        "displayName": "Creature Color",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_attribute",
        "displayName": "Creature Attribute",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_mood",
        "displayName": "Creature Mood",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "creature_health",
        "displayName": "Creature Health",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "collection_id",
        "displayName": "Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "location_groups": {
    "displayName": "Location Groups",
    "columns": [
      {
        "name": "location_group_id",
        "displayName": "Location Group Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_group_name",
        "displayName": "Location Group Name",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_group_island_faction",
        "displayName": "Location Group Island Faction",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_group_type",
        "displayName": "Location Group Type",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "gifting_events": {
    "displayName": "Gifting Events",
    "columns": [
      {
        "name": "gifting_event_id",
        "displayName": "Gifting Event Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "gifting_event_time",
        "displayName": "Gifting Event Time",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_id",
        "displayName": "Player Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "players",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "creature_id",
        "displayName": "Creature Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "creatures",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "item_transfer_id",
        "displayName": "Item Transfer Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "item_transfers",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "players": {
    "displayName": "Players",
    "columns": [
      {
        "name": "player_id",
        "displayName": "Player Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_name",
        "displayName": "Player Name",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_level",
        "displayName": "Player Level",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_favorite_faction",
        "displayName": "Player Favorite Faction",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_favorite_island",
        "displayName": "Player Favorite Island",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "interaction_events": {
    "displayName": "Interaction Events",
    "columns": [
      {
        "name": "interaction_event_id",
        "displayName": "Interaction Event Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "interaction_event_time",
        "displayName": "Interaction Event Time",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_id",
        "displayName": "Player Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "players",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "creature_id",
        "displayName": "Creature Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "creatures",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "interaction_event_observed_creature_mood",
        "displayName": "Interaction Event Observed Creature Mood",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_id",
        "displayName": "Location Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "locations",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "gifting_event_id",
        "displayName": "Gifting Event Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "gifting_events",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "locations": {
    "displayName": "Locations",
    "columns": [
      {
        "name": "location_id",
        "displayName": "Location Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_x",
        "displayName": "Location X",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_y",
        "displayName": "Location Y",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "location_group_id",
        "displayName": "Location Group Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "location_groups",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "player_collection_access": {
    "displayName": "Player Collection Access",
    "columns": [
      {
        "name": "player_collection_access_id",
        "displayName": "Player Collection Access Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_id",
        "displayName": "Player Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "players",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "collection_id",
        "displayName": "Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "player_collection_access_level",
        "displayName": "Player Collection Access Level",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "player_creature_relationships": {
    "displayName": "Player Creature Relationships",
    "columns": [
      {
        "name": "relationship_id",
        "displayName": "Relationship Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "player_id",
        "displayName": "Player Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "players",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "creature_id",
        "displayName": "Creature Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "creatures",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "player_creature_relationship_level",
        "displayName": "Player Creature Relationship Level",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "recipe_ingredient_resource_types": {
    "displayName": "Recipe Ingredient Resource Types",
    "columns": [
      {
        "name": "recipe_ingredient_resource_type_id",
        "displayName": "Recipe Ingredient Resource Type Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "recipe_id",
        "displayName": "Recipe Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "recipes",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "resource_type_id",
        "displayName": "Resource Type Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "resource_types",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "resource_types": {
    "displayName": "Resource Types",
    "columns": [
      {
        "name": "resource_type_id",
        "displayName": "Resource Type Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type",
        "displayName": "Resource Type",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type_faction",
        "displayName": "Resource Type Faction",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type_category",
        "displayName": "Resource Type Category",
        "type": "VARCHAR(255)",
        "scale": "nominal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type_rarity",
        "displayName": "Resource Type Rarity",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type_base_mood_effect",
        "displayName": "Resource Type Base Mood Effect",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type_base_health_effect",
        "displayName": "Resource Type Base Health Effect",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      }
    ]
  },
  "resource_transfers": {
    "displayName": "Resource Transfers",
    "columns": [
      {
        "name": "resource_transfer_id",
        "displayName": "Resource Transfer Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_transfer_time",
        "displayName": "Resource Transfer Time",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "source_collection_id",
        "displayName": "Source Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "destination_collection_id",
        "displayName": "Destination Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "resource_id",
        "displayName": "Resource Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "resources",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  },
  "resources": {
    "displayName": "Resources",
    "columns": [
      {
        "name": "resource_id",
        "displayName": "Resource Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": true,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_quality",
        "displayName": "Resource Quality",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": false,
          "references": []
        }
      },
      {
        "name": "resource_type_id",
        "displayName": "Resource Type Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "resource_types",
              "relationship": "one-to-many"
            }
          ]
        }
      },
      {
        "name": "collection_id",
        "displayName": "Collection Id",
        "type": "INTEGER",
        "scale": "ordinal",
        "isPrimaryKey": false,
        "foreignKey": {
          "isForeignKey": true,
          "references": [
            {
              "table": "collections",
              "relationship": "one-to-many"
            }
          ]
        }
      }
    ]
  }
};

columns = [
    {
      "name": "locations",
      "columns": [
        {
          "name": "location_id",
          "displayName": "Location ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "location_x",
          "displayName": "Location X",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "location_y",
          "displayName": "Location Y",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "location_group_id",
          "displayName": "Location Group ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "player_creature_relationships",
      "columns": [
        {
          "name": "relationship_id",
          "displayName": "Relationship ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "player_id",
          "displayName": "Player ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "creature_id",
          "displayName": "Creature ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "player_creature_relationship_level",
          "displayName": "Relationship Level",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "player_collection_access",
      "columns": [
        {
          "name": "player_collection_access_id",
          "displayName": "Player Collection Access ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "player_id",
          "displayName": "Player ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "collection_id",
          "displayName": "Collection ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "player_collection_access_level",
          "displayName": "Access Level",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "recipe_ingredient_resource_types",
      "columns": [
        {
          "name": "recipe_ingredient_resource_type_id",
          "displayName": "Ingredient Resource Type ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "recipe_id",
          "displayName": "Recipe ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "resource_type_id",
          "displayName": "Resource Type ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "resources",
      "columns": [
        {
          "name": "resource_id",
          "displayName": "Resource ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "resource_quality",
          "displayName": "Resource Quality",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "resource_type_id",
          "displayName": "Resource Type ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "collection_id",
          "displayName": "Collection ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "items",
      "columns": [
        {
          "name": "item_id",
          "displayName": "Item ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "item_quality",
          "displayName": "Item Quality",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "recipe_id",
          "displayName": "Recipe ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "collection_id",
          "displayName": "Collection ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "resource_transfers",
      "columns": [
        {
          "name": "resource_transfer_id",
          "displayName": "Resource Transfer ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "resource_transfer_time",
          "displayName": "Resource Transfer Time",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "source_collection_id",
          "displayName": "Source Collection ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "destination_collection_id",
          "displayName": "Destination Collection ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "resource_id",
          "displayName": "Resource ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "item_transfers",
      "columns": [
        {
          "name": "item_transfer_id",
          "displayName": "Item Transfer ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "item_transfer_time",
          "displayName": "Item Transfer Time",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "source_collection_id",
          "displayName": "Source Collection ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "destination_collection_id",
          "displayName": "Destination Collection ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "item_id",
          "displayName": "Item ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "crafting_events",
      "columns": [
        {
          "name": "crafting_event_id",
          "displayName": "Crafting Event ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "crafting_event_time",
          "displayName": "Crafting Event Time",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "crafting_event_skill_level",
          "displayName": "Crafting Skill Level",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "recipe_id",
          "displayName": "Recipe ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "item_transfer_id",
          "displayName": "Item Transfer ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "crafting_table_collection_id",
          "displayName": "Crafting Table Collection ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "gifting_events",
      "columns": [
        {
          "name": "gifting_event_id",
          "displayName": "Gifting Event ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "gifting_event_time",
          "displayName": "Gifting Event Time",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "player_id",
          "displayName": "Player ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "creature_id",
          "displayName": "Creature ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "item_transfer_id",
          "displayName": "Item Transfer ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "interaction_events",
      "columns": [
        {
          "name": "interaction_event_id",
          "displayName": "Interaction Event ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "interaction_event_time",
          "displayName": "Interaction Event Time",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "player_id",
          "displayName": "Player ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "creature_id",
          "displayName": "Creature ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "interaction_event_observed_creature_mood",
          "displayName": "Observed Creature Mood",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "location_id",
          "displayName": "Location ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "gifting_event_id",
          "displayName": "Gifting Event ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    },
    {
      "name": "creature_sightings",
      "columns": [
        {
          "name": "creature_sighting_id",
          "displayName": "Creature Sighting ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "creature_sighting_time",
          "displayName": "Creature Sighting Time",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "creature_id",
          "displayName": "Creature ID",
          "type": "integer",
          "scale": "ordinal"
        },
        {
          "name": "location_group_id",
          "displayName": "Location Group ID",
          "type": "integer",
          "scale": "ordinal"
        }
      ]
    }
  ];


router.get('/areas', (req, res) => {
    res.json(areas)
});

router.get('/tables', (req, res) => {
    res.json(tables)
});

router.get('/columns', (req, res) => {
  res.json(columns)
});

// Export the router
module.exports = router;