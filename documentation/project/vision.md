---
title: Product vision
status: draft
---

# Product vision

:::info Fictional product
ServeFlow is a fictional product. It exists to demonstrate documentation
work. Any match with a real company or product is accidental.
:::

## Summary

ServeFlow is a cloud platform that restaurants buy to run their orders in
one place. It collects orders from every sales channel, routes them through
the kitchen to the guest, and keeps the menu and prices in sync across all
channels and locations.

ServeFlow works for a company with one location and for a chain with
hundreds. The data model is the same: a company opens a new location in
the same account, not in a new system.

## Problem

A typical restaurant sells through several channels at once: the dining
room, its own website, and two or three delivery aggregators. Each channel
comes with its own tools. As a result:

- Staff accept orders on several tablets and retype them into the main
  order system.
- The menu, prices, and stop list change in one place but stay outdated in
  the others. Guests order dishes that are no longer available.
- The warehouse system doesn't know what the kitchen sold, so stock levels
  are always behind.
- When the business opens a second location, it either buys a second copy
  of the software and manages two accounts, or it moves to another product.

## Product statement

For restaurant businesses of any size that sell through several channels,
ServeFlow is an order management platform that brings all orders, menus,
and locations into one system. Unlike single-location tools, ServeFlow
supports any number of locations and countries from day one and connects
to the systems the restaurant already uses through an open API.

## Customers

The customer is a restaurant business: a single restaurant, a café, a
chain, or a group of brands. The customer buys one subscription for the
whole company and adds locations as it grows.

Locations can be in different countries. Country-specific settings, such
as currency, time zone, taxes, and languages, belong to each location, not
to the account type.

## Users and applications

| User | Application | Main tasks |
|---|---|---|
| Guest | QR menu, ordering website | Browse the menu, place and pay for an order |
| Waiter | Waiter app (phone or tablet) | Take orders at the table, send them to the kitchen, take payment on a payment terminal |
| Cook | Kitchen display | See orders by kitchen station, mark dishes as ready |
| Location manager | Management console (web) | Manage the stop list, staff, and local prices |
| Regional manager, owner | Management console (web) | Manage the company menu, locations, and reports |
| Customer IT team, integrator | Developer portal, API | Connect ServeFlow to the warehouse, website, and other systems |
| ServeFlow support and operations | Back office (internal) | Onboard customers, monitor integrations, resolve incidents |

Couriers aren't ServeFlow users. Delivery aggregators assign their own
couriers, and ServeFlow shows the courier status that the aggregator
reports.

## Value

| For | Value |
|---|---|
| Owners | One system and one account for all locations and channels. Network-wide reports. |
| Managers | One menu with local prices and a stop list that updates every channel. |
| Staff | One order queue instead of several tablets. Fewer manual steps and fewer mistakes. |
| Guests | Accurate menus, correct availability, and clear order status. |
| Integrators | A documented public API, webhooks, and a sandbox. |

## Key capabilities

1. **Unified order flow.** Orders from the dining room, QR menu, website,
   and delivery aggregators go through one lifecycle and one kitchen queue.
2. **Kitchen routing.** Each dish goes to the right kitchen station. The
   order becomes ready when all its dishes are ready.
3. **Central menu with local overrides.** The company defines menu items
   once. Each location or country has its own price lists, recipe
   variants, and availability.
4. **Multi-location access control.** One user account can work in one
   location, a region, or the whole company, depending on assigned roles.
5. **Channel synchronization.** Menu, price, and stop-list changes reach
   all sales channels automatically.
6. **Integration platform.** A public REST API, webhooks, and ready
   connectors for delivery aggregators, payment providers, and warehouse
   systems.

## Integrations

| System | Direction | Purpose |
|---|---|---|
| Delivery aggregators | Both | Receive orders, send status updates, track the courier, publish the menu and stop list |
| Ordering website | Both | Create orders, get the menu and order status |
| Payment provider | Both | Take online payments by card, Apple Pay, or Google Pay. Take payments on payment terminals at the table. Process refunds |
| Warehouse or ERP systems | Both | Send sales for ingredient write-off, receive stock levels to update the stop list |

## Out of scope

ServeFlow doesn't:

- Sell or service hardware. Customers use their own tablets, screens, and
  payment terminals.
- Replace the warehouse or ERP system. ServeFlow sends sales data to it
  and reads stock levels from it.
- Run a delivery marketplace or a courier service. ServeFlow connects to
  existing delivery aggregators.
- Connect to cash registers or issue fiscal receipts.
- Work without an internet connection.
- Support franchise models. Every location belongs to the customer's
  company.
- Handle accounting, payroll, or HR.

## Success metrics

| Metric | Target |
|---|---|
| Time to connect a new delivery aggregator for a customer | Less than 1 day |
| Orders retyped by hand between systems | 0 |
| Time for a menu change to reach all channels | Less than 5 minutes |
| Time to open a new location in an existing account | Less than 1 hour |

## Assumptions

- Each location has a stable internet connection.
- Delivery aggregators accept menus, send orders, and report courier
  status through their partner APIs.
- The payment provider supports online payments and payment terminals
  through one API.
- The customer's warehouse or ERP system can export stock levels and
  import sales, either through an API or through files.
