<script lang="ts">
  import { RouterView } from "@dvcol/svelte-simple-router/components";

  import type {
    Route,
    RouterOptions,
  } from "@dvcol/svelte-simple-router/models";

  import HomeComponent from "./Home.svelte";

  const RouteName = {
    Home: "home",
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
