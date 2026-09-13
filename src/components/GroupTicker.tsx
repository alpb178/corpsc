import { groupSites, groupSiteUrl, siteDomain } from "@/content/group-ticker";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

// Top strip promoting the sibling sites of the CorpSC Group. The same strip
// ships on Tu Chamba, Iris Natural and Invoices, which is why it keeps the
// group's navy in both themes instead of resolving through the page tokens:
// readers should recognise it as one bar across the four sites.
//
// The track holds the list twice and slides -50%: when the first copy ends the
// second sits exactly where the first started, so the loop has no jump. The
// duplicate is hidden from screen readers and taken out of the tab order.
export default function GroupTicker({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <aside className="gt" aria-label={dict.ticker.label}>
      <div className="gt-viewport">
        <div className="gt-track">
          <TickerRow locale={locale} />
          <TickerRow locale={locale} duplicate />
        </div>
      </div>

      <style>{CSS}</style>
    </aside>
  );
}

function TickerRow({
  locale,
  duplicate = false,
}: {
  locale: Locale;
  duplicate?: boolean;
}) {
  return (
    <ul className="gt-row" aria-hidden={duplicate || undefined}>
      {groupSites.map((site) => (
        <li key={site.slug}>
          <a
            href={groupSiteUrl(site.url)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            className="gt-link"
          >
            <span
              className="gt-dot"
              style={{ backgroundColor: site.color }}
              aria-hidden="true"
            />
            <span className="gt-name">{site.name}</span>
            <span className="gt-url">{siteDomain(site.url)}</span>
            <span className="gt-desc">{site.category[locale]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// Plain CSS rather than utilities: the animation and the edge mask are
// identical on the four group sites, so the block copies between repos without
// depending on each one's Tailwind setup.
const CSS = `
.gt {
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  height: 38px;
  overflow: hidden;
  background: #06132e;
  /* The site header carries the same navy, so without this rule the strip
     would blend straight into it. */
  border-bottom: 1px solid rgba(127, 176, 255, 0.22);
  color: #ffffff;
  font-size: 0.8125rem;
  line-height: 1;
}
.gt-viewport {
  position: relative;
  flex: 1;
  overflow: hidden;
}
/* The edges fade with gradients of the strip's own background rather than
   mask-image: on iOS Safari a mask can freeze the animation running
   underneath it. */
.gt-viewport::before,
.gt-viewport::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 24px;
  z-index: 1;
  pointer-events: none;
}
.gt-viewport::before {
  left: 0;
  background: linear-gradient(90deg, #06132e, rgba(6, 19, 46, 0));
}
.gt-viewport::after {
  right: 0;
  background: linear-gradient(270deg, #06132e, rgba(6, 19, 46, 0));
}
.gt-track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: gt-scroll 38s linear infinite;
}
/* Pause on hover only where there is a pointer: on touch, :hover sticks
   after the first tap and would leave the strip stopped for good. Keyboard
   focus always pauses it. */
.gt-track:focus-within {
  animation-play-state: paused;
}
@media (hover: hover) and (pointer: fine) {
  .gt:hover .gt-track { animation-play-state: paused; }
}
.gt-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-right: 2rem;
  margin: 0;
  list-style: none;
}
.gt-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
}
.gt-link:hover .gt-name { text-decoration: underline; }
.gt-link:focus-visible {
  outline: 2px solid #7fb0ff;
  outline-offset: 3px;
  border-radius: 2px;
}
.gt-dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.35);
}
.gt-name { font-weight: 600; }
.gt-url { color: #ffffff; }
.gt-desc { color: #ffffff; }
/* Separator between the link and its blurb; decorative, hence CSS. */
.gt-desc::before {
  content: "·";
  margin-right: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
}
@keyframes gt-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
/* No motion: the strip stays put and can be dragged horizontally instead. */
@media (prefers-reduced-motion: reduce) {
  .gt-track { animation: none; }
  .gt-viewport { overflow-x: auto; }
}
`;
