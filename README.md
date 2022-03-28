# React Groceries
 Grocery app that allows users to make a grocery list

### Learning Objectives
    Practice setting up a React app
    Practice Mocking a React app
    Practice using and lifting state
    Practice rendering a list
    Practice conditional rendering

## Prerequisites
Introduction to React static components, mocking, state, rendering

## Technical Requirements
1. Read over these specs and draw a mockup of your app 
2. Must have grocery items in this shape
{
  item: '',
  brand '',
  units: '',
  quantity: 0,
  isPurchased: false
}

1. Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
2. Make inputs so that new items can be added
3. Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
4. Add some style to your app
5. Stretch Add a button that says 'remove' and when clicked the value of isPurchased is toggled