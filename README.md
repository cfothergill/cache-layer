# Caching Layer

## What assumptions did you have to make?

None

## Which technologies did you choose? Why?

I chose to use NodeJS because it can handle a lot of requests concurrently. Once a request has been delegated to the
origin the next request can be handled and delegated if needed. Other languages can be process based and under high
traffic may have issues when a lot of network IO is occurring.

Instead of choosing a singular cache and becoming dependant on it I choose to go for a contract based approach. Any
cache system can be added to the system as long as it implements the cache interface. This could also help with testing
locally or running automated tests as an in memory cache could be used instead of a persistent one.

I have used flow to strongly type all of the code I have written. This should reduce and prevent bugs for any future
development.

## What technical compromises did you have to make in order to achieve your solution? What is the severity of this tech debt, and what would a path to resolving it look like?

I used express for routing which has left me with static routes. If further API endpoints were added it may become
difficult to keep our routes in sync with the origin. A better solution would be to more blindly forward requests to
the origin. This way our proxy becomes more dumb and could potentially be used for other badly written API's or
possibly as a form of CDN / Cache.

## How do we run your code?

- `cp .env.example .env`
- `yarn`
- `docker-compose up`
- `open http://localhost:3000/api/v0/drones`

## What future features do you think we might be able to build based on this API?

If this code was made a bit more generic, it could be used for any type of proxy / cache requirement. I have already
started along this path by allowing for customisation using environment variables, implementing multiple cache drivers,
allowing the origin hostname to be changed, etc.
