import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.MobileOnly(Component.RecentNotes({ showTags: false }))],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/krutik460",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    // Component.TagList(), // CHANGED - Uncomment to display tags
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        fontSize: 0.8,
        opacityScale: 2,
        repelForce: 1,
        centerForce: 0.45,
        linkDistance: 60,
        removeTags: ["people"],
      },
      globalGraph: {
        fontSize: 1.2,
        opacityScale: 2,
        repelForce: 1.9,
        centerForce: 0.45,
        linkDistance: 70,
        removeTags: ["people"],
      },
    }),
    Component.DesktopOnly(Component.RecentNotes({ showTags: false })),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
