import { handleSchedule } from '@vercel/schedules';
import { send } from '@vercel/queue';

export const POST = handleSchedule(async (metadata) => {
  console.log(`Running ${metadata.name}, scheduled for ${metadata.scheduledAt.toISOString()}`);
  await send('handle-task', "testid");
});
