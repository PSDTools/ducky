<script lang="ts">
  import {
    RouterView,
    type Route,
    type RouterOptions,
  } from "@dvcol/svelte-simple-router";

  import HomeComponent from "./Home.svelte";
  import PhishingComponent from "./Phishing.svelte";
  import FactCheckComponent from "./FactCheck.svelte";
  import ChatComponent from "./Chat.svelte";
  import FactCheckLoadingComponent from "./FactCheckLoading.svelte";
  import FactsChecked from "./FactsChecked.svelte";

  const RouteName = {
    Home: "home",
    Phishing: "phishing",
    FactCheck: "fact-check",
    FactCheckLoading: "fact-check-loading",
    FactsChecked: "real",
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
      name: RouteName.Phishing,
      path: `/${RouteName.Phishing}`,
      component: PhishingComponent,
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
      name: RouteName.FactsChecked,
      path: `/${RouteName.FactsChecked}`,
      component: FactsChecked,
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
