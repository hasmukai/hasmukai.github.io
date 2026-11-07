# Profile portfolio implementation plan

**Goal:** Turn the minimal Astro starter into an X-inspired Japanese portfolio.

**Architecture:** Shared responsive shell, static Astro pages, and Markdown
content for blog pages and timeline announcements. No additional runtime library.

**Spec:** Use the supplied avatar, `Hasmukai(はすむかい)`,
`Institute of Science Tokyo B4`, and the three provided external profiles.
Navigation order: プロフィール, 検索, ブログ. Search does nothing.
Profile returns home; blog opens the article index.

**Design:** White, fine gray borders, blue accents, an abstract pale-blue cover,
overlapping avatar, desktop left navigation and right link column. Compact left
navigation on phones. Empty states until real articles exist.

- [x] Shared layout, icons, profile data, responsive styles.
- [x] Home/profile/timeline and supplied avatar.
- [x] Markdown collection, published-post helper, blog index, article routes.
- [x] README with article-authoring instructions.
- [x] Production build, generated navigation/search markup and source inspection,
  and actual Markdown fixtures for publishing, ordering and draft exclusion.

## Verification results

- Home, blog, and avatar returned HTTP 200. Avatar SHA-256 matches the supplied file.
- Temporary Markdown fixtures verified rendered headings, bold text, code blocks,
  escaped descriptions, Japanese article URLs, chronological order, announcements,
  and exclusion of drafts from both listings and generated routes.
- Removing all articles originally left Astro 7.0.3's cached entries behind.
  The collection loader now clears its store before a full sync and watches for
  the first file when the collection is empty. Verified deletion removes old routes.
- A first save with invalid frontmatter originally detached that watcher. The
  reproduction failed before the fix and passed afterward, including deletion.
- Independent code review identified that watcher issue and low text contrast;
  both addressed. Primary button contrast is now 5.07:1 and secondary text 4.76:1.
- Browser visual/interaction QA unavailable: browser webview attachment timed out,
  and the app reported its primary window was not ready. Responsive CSS is present
  but desktop/mobile appearance has not been visually verified.
- All verification articles removed; development servers stopped after checks.

Keep the current checkout and hosting arrangement. Do not fabricate articles,
additional biography or engagement statistics. No publication is requested.
