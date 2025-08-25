---
title: "PostHog Instrumentation on kauedelazzeri.com"
subtitle: "Practical guide to instrumenting events and building a product analytics funnel"
date: "2025-06-19"
author: "Kaue Delazzeri"
tags: ["PostHog", "Analytics", "Product Analytics", "Web Analytics"]
coverImage: "2025-06-19-00-09-26.png"
---

# PostHog Instrumentation on kauedelazzeri.com
*Practical guide to instrumenting events and building a product analytics funnel*

The steps below show the full workflow used to integrate the site with PostHog, inspect captured events and create the dashboards that monitor contacts.

![Initial dashboard showing weekly active users](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-03-29.png)
PostHog's dashboard provides an overview of weekly active users, geographic distribution and basic retention metrics, confirming that events are being received.

![Exploring recent events](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-09.png)
The Activity → Explore view lists every event sent from the site; it's the starting point to validate the instrumentation.

![List of captured events](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-18.png)
Here the stream of events shows automatic captures such as `pageview` and custom actions triggered by the site.

![Filtering for `page_loaded`](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-28.png)
Applying a filter for the `page_loaded` event isolates page load events for focused analysis.

![Result after filter](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-46.png)
The filter reveals only the page load events, allowing a quick check of how many pages were opened in the period.

![Count of page loads in last hour](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-04-59.png)
PostHog displays that five pages were loaded in the last hour, validating that the tracking snippet is active.

![Automatic event catalog](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-05-29.png)
In Data Management the automatically captured events are listed, making it easy to promote them to Actions.

![Inspecting the `page_loaded` action](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-05-37.png)
Opening the action shows the matching rule used to aggregate raw events into a single semantic action.

![Creating a custom action](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-05-51.png)
Actions allow grouping events that represent the same user intention, simplifying analysis in funnels and dashboards.

![Accessing Product Analytics](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-02.png)
The Analytics section concentrates insights that can be added to dashboards.

![Starting a new Trend insight](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-17.png)
A new Trend insight is created to monitor page views over time.

![Selecting the `pageview` event](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-29.png)
The analysis is configured to count occurrences of the `pageview` event.

![Filtering by page path](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-06-57.png)
Adding a filter for the contact page isolates visits that reach the desired section.

![Trend result](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-03.png)
The chart shows eight visits registered on 16 June 2025, confirming traffic spikes.

![Back to event explorer](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-27.png)
Returning to Explore enables inspection of each event behind the aggregates.

![Opening a click event](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-45.png)
The event representing a click on the language selector is expanded for detailed metadata.

![Browser and language metadata](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-07-54.png)
Event payload includes browser, locale and timestamp – essential to understand user context.

![Location and device details](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-00.png)
City, timezone and screen resolution help validate where and how the site is accessed.

![Session information](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-15.png)
The session property links the event to the "projects" page, enabling segmentation by section.

![Filtering events by session](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-23.png)
Applying a session filter in the funnel ensures only interactions within the projects area are considered.

![Excluding internal users](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-36.png)
Internal traffic is removed by excluding localhost addresses from the dataset.

![Filtering by device IDs](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-42.png)
Known device identifiers are added to the ignore list to avoid biased metrics.

![Removing preview traffic](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-08-47.png)
Requests coming from Vercel preview environments are also filtered out to keep analytics clean.

![Building the contact funnel](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-03.png)
A funnel is built to follow users from landing on the site to opening the contact section.

![Funnel results](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-09.png)
At this point two visitors accessed the site but none reached the contact page, indicating opportunity for improvement.

![Geographical distribution](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-19.png)
The retention insight displays visits by country, showing most traffic from Brazil with some from the United States.

![Final dashboard](/images/articles/kauedelazzeri-posthog-configuration/2025-06-19-00-09-26.png)
The custom dashboard consolidates monthly active users and the funnel tracking clicks on LinkedIn or e-mail, focusing on the success metric: contacts.
