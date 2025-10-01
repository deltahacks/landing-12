import { PostHog } from "posthog-node";
import { env } from "~/env";

// NOTE: This is a Node.js client, so you can use it for sending events from the server side to PostHog.
function createPostHogClient() {
  const posthogClient = new PostHog(env.POSTHOG_KEY, {
    host: env.POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
  return posthogClient;
}

export const posthogServerClient = createPostHogClient();
