import { getOsEnv } from "@/libs/env";

const env = {
  github: {
    clientId: getOsEnv("GITHUB_CLIENT_ID"),
    clientSecret: getOsEnv("GITHUB_CLIENT_SECRET"),
  },
};

export default env;
