# Accounts

User account registrations managed by either clerk or postgress tbd

# Logged in User

## Feed

All notifications show up here and they can be dismissed This is seperate from
the channels.

## Channels

Notifications can only be created in channels. Clicking a channel would show the
tasks of the channel

## Add NotiTask

Always visible at the top right when viewing any channel.

- Select channel, defaults to current viewing one or "create channel"
- Select task type, no default.
- Next button to show task type specific configuration

### Task Types

#### Website availability

Types in a url that does not exist and once it returns something other than 404
then it would notify it. Polling rate is not changable

- URL input, no default

# Schedules

Every x minutes a cron job like schedule runs to check for any polling related
notification tasks. Then for each task it appends to a queue and the queue
handles that.
