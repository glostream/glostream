export type ApiParam = {
  name: string;
  required?: boolean;
  note: string;
};

export type ApiEndpoint = {
  method: "GET";
  path: string;
  summary: string;
  params: ApiParam[];
};

export type ApiGroup = {
  name: string;
  endpoints: ApiEndpoint[];
};

export const substackApiGroups: ApiGroup[] = [
  {
    name: "Search",
    endpoints: [
      {
        method: "GET",
        path: "/search/top",
        summary: "Ranked posts and comments for a keyword.",
        params: [
          { name: "query", required: true, note: "Search text" },
          { name: "language", note: "ISO code that boosts ranking, e.g. en" },
        ],
      },
      {
        method: "GET",
        path: "/search/post",
        summary:
          "Search posts. Also returns a related-publications sidecar (newsletters that showed up next to matching posts — not directory ranking).",
        params: [
          { name: "query", required: true, note: "Search text" },
          { name: "page", note: "Starts at 0" },
          { name: "language", note: "ISO code, e.g. en" },
        ],
      },
      {
        method: "GET",
        path: "/search/people",
        summary: "Search public profiles.",
        params: [
          { name: "query", required: true, note: "Search text" },
          { name: "page", note: "Starts at 0" },
          { name: "language", note: "ISO code, e.g. en" },
        ],
      },
      {
        method: "GET",
        path: "/search/publication",
        summary:
          "Search the newsletter directory by name or topic. Ranked publications, not posts. This is the route to use for keyword discovery.",
        params: [
          { name: "query", required: true, note: "Search text" },
          { name: "page", note: "Starts at 0" },
          { name: "language", note: "ISO code, e.g. en" },
        ],
      },
      {
        method: "GET",
        path: "/search/explore",
        summary: "Explore tabs and items.",
        params: [
          { name: "tab", note: "e.g. explore" },
          { name: "type", note: "e.g. base" },
          { name: "query", note: "Optional filter" },
          { name: "cursor", note: "Pagination cursor" },
          { name: "language", note: "ISO code, e.g. en" },
        ],
      },
    ],
  },
  {
    name: "Feed",
    endpoints: [
      {
        method: "GET",
        path: "/feed",
        summary: "Feed of posts and comments by category tab.",
        params: [
          { name: "tab", note: "Default for-you" },
          { name: "cursor", note: "Pagination cursor" },
          { name: "limit", note: "Page size" },
        ],
      },
      {
        method: "GET",
        path: "/feed/tabs",
        summary: "List available feed tabs.",
        params: [
          { name: "surface", note: "e.g. explore" },
          { name: "selectedTab", note: "e.g. explore" },
          { name: "type", note: "e.g. base" },
        ],
      },
    ],
  },
  {
    name: "Publication",
    endpoints: [
      {
        method: "GET",
        path: "/publication/archive",
        summary: "Posts in a publication archive.",
        params: [
          {
            name: "publication",
            required: true,
            note: "Subdomain (platformer) or host (platformer.substack.com)",
          },
          { name: "sort", note: "Default new" },
          { name: "limit", note: "Page size" },
          { name: "offset", note: "Pagination offset" },
        ],
      },
      {
        method: "GET",
        path: "/publication/recommendations",
        summary: "Publications recommended from one publication.",
        params: [
          { name: "publicationId", required: true, note: "Numeric publication id" },
        ],
      },
    ],
  },
  {
    name: "Reader",
    endpoints: [
      {
        method: "GET",
        path: "/reader/post",
        summary: "One post by id, or by publication plus slug.",
        params: [
          { name: "postId", note: "From search or feed as post_id" },
          { name: "publication", note: "Required with slug" },
          { name: "slug", note: "Required with publication" },
        ],
      },
      {
        method: "GET",
        path: "/reader/comment",
        summary: "One comment by id.",
        params: [
          { name: "commentId", required: true, note: "From search or feed as comment_id" },
        ],
      },
      {
        method: "GET",
        path: "/reader/comment-replies",
        summary: "Replies to a comment.",
        params: [
          { name: "commentId", required: true, note: "Comment id" },
          { name: "cursor", note: "Pagination cursor" },
        ],
      },
      {
        method: "GET",
        path: "/reader/post-comments",
        summary: "Comments on a post.",
        params: [
          { name: "publication", required: true, note: "Subdomain or host" },
          { name: "postId", required: true, note: "Post id" },
        ],
      },
    ],
  },
  {
    name: "Discover",
    endpoints: [
      {
        method: "GET",
        path: "/categories",
        summary: "All public categories.",
        params: [],
      },
      {
        method: "GET",
        path: "/category",
        summary: "Publications in a category.",
        params: [
          { name: "categoryId", required: true, note: "e.g. 96" },
          { name: "tier", note: "Default all" },
          { name: "page", note: "Starts at 0" },
        ],
      },
    ],
  },
  {
    name: "Profile",
    endpoints: [
      {
        method: "GET",
        path: "/profile/public-profile",
        summary: "Public profile for a handle.",
        params: [{ name: "handle", required: true, note: "e.g. scottstillman" }],
      },
      {
        method: "GET",
        path: "/profile/activity",
        summary: "A user's public activity.",
        params: [
          { name: "profileId", required: true, note: "Numeric profile id" },
          { name: "cursor", note: "Pagination cursor" },
        ],
      },
      {
        method: "GET",
        path: "/profile/posts",
        summary: "Posts by a user.",
        params: [
          { name: "profileId", required: true, note: "Numeric profile id" },
          { name: "offset", note: "Pagination offset" },
          { name: "limit", note: "Page size" },
        ],
      },
    ],
  },
  {
    name: "Health",
    endpoints: [
      {
        method: "GET",
        path: "/health",
        summary: "Service health. Returns {\"status\":\"ok\"}.",
        params: [],
      },
    ],
  },
];
