import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 531,
  site: "commerce",
  domains: ["commerce.deco.site"],
});