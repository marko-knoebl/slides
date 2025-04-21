# Layered architecture

## Layered architecture

common layers in web applications:

- **controller** layer (HTTP)
- **service** layer (business logic)
- **model** layer (database connection)

## Layered architecture

**controller**: receives HTTP request, calls a service function for processing, sends HTTP response

**service**: gets called by a controller; can call other services and models (multiple); can return data to the controller; contains the main logic (_business logic_)

**model**: provides database access to services

## Layered architecture

often a route (HTTP query) corresponds directly to a model (database table)

e.g. in a shopping application:

```text
/products?category=phones&max_price=500
```

corresponds to:

```sql
SELECT * FROM products WHERE category = 'phones' AND price <= 500;
```

## Layered architecture

sometimes there can be a lot going on in the service layer

example: sending a new message via `POST` to _/messages_

messageService could use:

- authService (to authenticate / authorize the sender)
- userModel (to find the recipient)
- spamDetectionService
- messageModel (to store the message)
- notificationService (to notify the recipient - e.g. via SMS / email)

## Layered architecture

common layers in express applications:

- routing layer: receives an HTTP request and forwards it to a controller; potentially applies _middleware_
- controller layer: receives HTTP requests, calls services, sends HTTP responses
- service layer: contains the main logic (_business logic_)
- model layer: does database interactions (queries, mutations)

## Layered architecture

can be simplified for smaller projects, e.g.:

- combined routing / controller / service layer
- model layer

## Source code structure

typical source code structure:

- _server.js_ (main entry point)
- _db.js_ (database connection)
- _routes/_
- _controllers/_
- _models/_
