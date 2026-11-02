# AV Downloader privacy policy

**Last updated: 2 November 2026**

Here's the short version: **AV Downloader doesn't collect anything about you.** There's no account, no analytics, no ads, no crash reporting and no server. We never see what you download, what you share, or who you are.

The rest of this page explains how the app works, in plain words.

## Who "we" are

AV Downloader is a small personal project, not a company. There's no backend, no database and no website that the app reports to. This page and the app's releases are hosted publicly on GitHub.

## What we collect

Nothing. No name, email, phone number, contacts, location, device ID, usage statistics or crash logs. The app has nowhere to send them even if it wanted to.

## What we sell or share

Nothing. We don't have any of your data, so there's nothing to sell, rent, share or "use to improve our services".

## No analytics, ads, trackers or crash reporting

The app contains no analytics, advertising, tracking or crash-reporting code or libraries. It also shows no ads of its own; in fact it filters ads out of the pages it reads.

## Where your downloads go

Everything you download is saved in the app's own private folder on your phone. Other apps can't browse that folder. When you share something, Android hands only that file to the app you pick.

Old downloads are cleaned up automatically: the first time you share something on a new day, the app clears out older downloads. It keeps the one you're sharing, anything still downloading or waiting to be shared, and anything from the last couple of hours. You can also clear them any time with the **Clean up** button, and uninstalling the app removes everything.

## What the app connects to, and why

The app only goes online to do something you asked for, or to keep itself working:

- **The site behind the link you copied.** To fetch that post or video, plus its images, thumbnail, title, description and top comment. Some pages are opened in a hidden, in-app browser window, which loads what that page normally loads, minus the ads and trackers the filter lists catch.
- **GitHub**, to check this project's public releases for app updates (no account or token involved), and to check for and download updates to the open-source download engine built into the app.
- **Public ad-block filter lists**, downloaded so the app can strip ads from the pages it reads.
- **A free community database of sponsor segments**, so sponsor, self-promo and "like and subscribe" parts can be skipped in videos where the community has marked them. Videos nobody has marked are left as they are. The app sends it only the first few characters of a scrambled (hashed) version of the video's ID, not the ID itself, so the database can't tell exactly which video you saved.

Like any internet request, these services can see your phone's IP address and what was requested. That's between your phone and them, under their own privacy policies. We never get a copy of any of it.

## Optional sign-in (please read this one)

The app has **optional** sign-in buttons for the supported video and community sites. You never have to use them. The first time you share a link from the community site, the app offers its sign-in page once, and you can just skip it. Without signing in, most things still work, but some content (for example age-restricted, members-only or login-only posts) may not download.

If you do sign in:

- You type your password into **the site's own sign-in page**, shown inside the app. The app never sees or stores your password.
- The site gives the app the same login cookies a browser would get. These stay **only on your phone**: in the in-app browser's storage and in an encrypted copy (Android's encrypted storage). App backups are turned off, so they aren't copied into cloud backups.
- They're only ever sent back **to that same site**, to fetch the content you asked for. They're never sent to us or to anyone else. Nothing about the cookies themselves is written to logs; the app's own on-phone log only notes which site's sign-in a download used.
- While a download runs, a temporary copy is written to the app's private cache for the download engine and deleted when that download ends.

To sign out, long-press that site's signed-in button and tap **Sign out**. This deletes everything the app kept for that site: the encrypted copy, its cookies and storage in the in-app browser, and any temporary cookie files. If you're signed in to the other site too, that one stays signed in. Uninstalling the app also removes everything.

## Chat apps

Sharing uses Android's normal share feature. The app never signs in to, reads, or touches any chat app's account, messages or contacts. It just hands the file and caption to the app you tap, and you choose who to send it to.

## Permissions, explained simply

- **Accessibility.** This is how the app notices you tapped "Copy link" (or saw a "Link copied" message) in another app, so it can show the bubble. Android lets an accessibility service see on-screen events from all apps; this one only looks for that copy-link moment, then reads the copied link. It doesn't record what you type or read, and nothing it sees leaves your phone. A short "detection log" of why the bubble did or didn't appear (app and site names, never your clipboard text) is kept on your phone so you can troubleshoot it.
- **Display over other apps.** For the bubble, the progress rings and the share card.
- **Notifications.** To show download progress quietly.
- **Unrestricted battery.** So downloads can finish while your screen is off.
- **Install unknown apps.** So the app can install its own updates. Android always asks you to confirm.
- **Internet.** For the connections listed above.

## Children

The app isn't aimed at children and collects no data from anyone, children included.

## Changes

If this policy changes, the new version will be posted here with a new "last updated" date.

## Contact

Questions or worries? Open an issue at <https://github.com/mumayank/av-downloader-releases/issues>.
