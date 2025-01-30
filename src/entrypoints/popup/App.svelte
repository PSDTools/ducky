<script lang="ts">
  import { RouterView } from "@dvcol/svelte-simple-router/components";

  import type {
    Route,
    RouterOptions,
  } from "@dvcol/svelte-simple-router/models";

  import HomeComponent from "./Home.svelte";
  import SettingsComponent from "./Settings.svelte";
  import FactCheckComponent from "./FactCheck.svelte";
  import AiDetectorComponent from "./AIDetector.svelte";
  import ChatComponent from "./Chat.svelte";

  const RouteName = {
    Home: "home",
    Settings: "settings",
    FactCheck: "fact-check",
    AIDetector: "ai-detector",
    Chat: "chat",
    Any: "any",
  } as const;

  type RouteNames = (typeof RouteName)[keyof typeof RouteName];

  export const routes: Readonly<Route<RouteNames>[]> = [
    {
      name: RouteName.Home,
      path: `/${RouteName.Home}`,
      component: HomeComponent,
    },
    {
      name: RouteName.Settings,
      path: `/${RouteName.Settings}`,
      component: SettingsComponent,
    },
    {
      name: RouteName.FactCheck,
      path: `/${RouteName.FactCheck}`,
      component: FactCheckComponent,
    },
    {
      name: RouteName.AIDetector,
      path: `/${RouteName.AIDetector}`,
      component: AiDetectorComponent,
    },
    {
      name: RouteName.Chat,
      path: `/${RouteName.Chat}`,
      component: ChatComponent,
    },

    {
      name: RouteName.Any,
      path: "*",
      redirect: {
        name: RouteName.Home,
      },
    },
  ] as const;

  export const options = {
    routes,
    hash: true,
    nameAsTitle: true,
  } as const satisfies RouterOptions<RouteNames>;
</script>

<RouterView {options} />
