# Accounts

User account registrations managed by either clerk or postgress tbd

# Logged in User

## Feed

All notifications show up here and they can be dismissed
This is seperate from the channels.

## Channels

Notifications can only be created in channels which act as a grouping/categorizing mechanism.

New users start with one channel "all notifications" which is undeletable, it's the root channel.

## Add NotiTask

- Select channel, defaults to current viewing one or "no channel" which only displays it in the root channel.
- Select task type, no default.
- Next button to show task type specific configuration

### Task Types

#### URL

Types in a url that does not exist and once it returns something other than 404 then it would notify it. Polling rate is not changable

- URL input, no default
