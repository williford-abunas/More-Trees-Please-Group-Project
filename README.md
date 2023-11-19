# MoreTreesPlease...
### Week 7 Large group projects

## OVERVIEW

Plant trees, watch them grow and attract birds to your forest. Make sure you control the invasive plants and animals!

A Boilerplate is already set up for you with everything you will need to get started. This boilerplate is set up to use:

React
ReactQuery
Express
Knex.js
Sass
Auth? (stretch)

## MVP 
When the user opens the homepage there will be a map of NZ that is split into 3 zone: Upper North, Lower North/Upper South and Lower South. 
The user will be able to create an account with auth0 so they can add trees.
The user can select a section and be taken to a new page where a forest section and an 'updates' section is displayed.  The user will be given a seed for a random tree from the trees database. The plant data will be shown to the user in some manner, the user can choose a fixed location where on the forest section to plant the tree.
Over time that plant will appear to grow. Once it reaches a certain age the plant will be ‘mature’ and cease to grow. 
Once the user has 10 mature trees, a random bird is pulled from the birds database and a text update says “bird Spotted” and a summary of how many species of birds have been spotted is updated in the updates section.

#### User Stores
------------------------------------------------------------------------------------------

### MVP

## As a non-registered User
 - I want to be able to view the whole map of NZ
 - I want to be able to access all three sections of the map
 - I want to be able to see information about each tree that's been planted when I click on it. Perhaps with a popup, or in the updates section beneath the map. (Species, date planted),

## As a registered User (If incorporating Authorization)
- I want to receive a random tree seed from the database when I log in and an additional random seed every 30 seconds thereafter.
- I want to be able to click on the forest canvas and 'plant' my seed in that spot.
- I want my plants to "grow" over time.
-I want to see a visual representation of my plants.
- I want a random bird species from the database to appear at a random location on the map once ten plants reach maturity.
- I want an invasive plant to appear at a random location on the map every minute and the ability to click it and remove it. 

### STRETCH

- Incorporate Authorization so only registered users can do tasks specified above (optional)
- I want to be able to see the tree grow slowly in size over time, and stop when it's reached 'maturity'. Perhaps 3 minutes?
- I want to be able to attach the user's name to a tree that has been planted by them and add each planted tree to it's own database with it's details including 'planted_by'
- I want to be able to hear birdsong from the birds in my forest:
      https://www.doc.govt.nz/nature/native-animals/birds/bird-songs-and-calls/
- I want the birds to be able to fly around the map randomly.
- I want an update once a tree reaches maturity.
- I want an update once a bird is spotted in my forest.
- I want it to be impossible to remove an invasive pine tree if it isn't removed within the first 30 seconds.
- I want my cursor to change into a little spade or chainsaw when I remove an invasive pine tree.

### DB (Server Side)
------------------------------------------------------------------------------------------
## Birds
The Birds table holds the following info:
id: number 
name: stirng 
likesFlowering: bool
likesFruiting: bool
isNocturnal: bool
favouriteTreeId: number (can be used to join on plants table if desired)

## Plants
The plants table holds the following info:

  id: number
  name: string
  region: number
  isFlowering: boolean
  isFruiting: boolean
  maxHeight: number
  native: boolean
  imgUrl: string

any plant with a false value for the native column will be treated as an invasive species.


## Planted Trees
if using sccount log in, we will wnt to keep track of th trees the user is planting

Column Name   Data Type   Purpose
-----------------------------------
id
plantName
datePlanted
....?
