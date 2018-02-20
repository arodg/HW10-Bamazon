# HW10-Bamazon

## What is Bamazon?

Bamazon is an interactive program which uses MySQL and Node.js to create and update a simple store.

## Overview
In this app the user is a customer who is prompted to place an order, if desired, for items in the Bamazon store. The app is designed with a customer view, i.e., the user/customer can see a list of items for sale and can choose which item and how many to purchase in each order. If there is an insufficient quantity in the store to fill the customer's order, the customer is alerted and the order does not go through. On the other hand, if the order can be filled, the customer is alerted with a success message and the database is updated to reflect the decrease in inventory.

## Setup

1. Start MySQL server and run schema.sql to populate the database.
![mysql database](https://user-images.githubusercontent.com/28015894/36409222-dd510ec6-15cf-11e8-94a1-8f285a503ab7.png)
2. npm install
3. node bamazonCustomer.js

## Example

### Initial Message
![first prompt](https://user-images.githubusercontent.com/28015894/36409382-e156f5de-15d0-11e8-94d9-80a0c41b2f08.png)

### List of Items
![second prompt](https://user-images.githubusercontent.com/28015894/36409552-cb735c20-15d1-11e8-9d85-b58ff965bb86.png)

### Unsuccessful Order
![insufficient quantity](https://user-images.githubusercontent.com/28015894/36409563-d9cd9fe2-15d1-11e8-91ea-9411d2fe07a9.png)

### Successful Order
![successful order](https://user-images.githubusercontent.com/28015894/36409582-e9496604-15d1-11e8-973c-1a629fa3c82b.png)

### Updated Database
![updated database](https://user-images.githubusercontent.com/28015894/36409591-f400e73e-15d1-11e8-9a45-eb5e90de7892.png)


