<script lang="ts">
  import {
    RouterView,
    type Route,
    type RouterOptions,
  } from "@dvcol/svelte-simple-router";

  import HomeComponent from "./Home.svelte";
  import SettingsComponent from "./Settings.svelte";
  import FactCheckComponent from "./FactCheck.svelte";
  import AiDetectorComponent from "./AIDetector.svelte";
  import ChatComponent from "./Chat.svelte";
  import FactCheckLoadingComponent from "./FactCheckLoading.svelte";

  const RouteName = {
    Home: "home",
    Settings: "settings",
    FactCheck: "fact-check",
    FactCheckLoading:"fact-check-loading",
    AIDetector: "ai-detector",
    Chat: "chat",
    Any: "any",
  } as const;

  type RouteNames = (typeof RouteName)[keyof typeof RouteName];

  export const routes = [
    {
      name: RouteName.Home,
      path: `/`,
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
      name: RouteName.FactCheckLoading,
      path: `/${RouteName.FactCheckLoading}`,
      component: FactCheckLoadingComponent,
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
  ] as const satisfies Route<RouteNames>[];

  export const options = {
    routes,
    hash: true,
    nameAsTitle: true,
  } as const satisfies RouterOptions<RouteNames>;
</script>

<RouterView {options} />
