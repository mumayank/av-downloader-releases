# AV Downloader privacy policy

**Last updated: 13 November 2026**

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

Downloads go to the public **Downloads/AVDownloader** folder when Android lets the app write there. If it can't, the app writes to its own private storage and copies the finished file into Downloads/AVDownloader through Android's media store. Files in the public Downloads folder can be seen by other apps and by you in a file manager. Nothing is uploaded to us.

There is no automatic daily cleanup. The app keeps downloads until you tap **Delete** in the **Data used** row on the main screen. Uninstalling the app removes its private files; files already saved in Downloads/AVDownloader stay there until you delete them.

## What the app connects to, and why

The app only goes online to do something you asked for, or to keep itself working:

- **The site behind the link you copied.** This can be YouTube, Reddit, or any other web link. The app fetches the media, plus the title, description, images, thumbnail and up to three top comments. For articles, it opens the page in a hidden, in-app browser with the ad blocker and a reader view, so it can read the article and capture a stripped page image. Some pages load what they normally load, minus the ads and trackers the filter lists catch.
- **GitHub**, to check this project's public releases for app updates (no account or token involved), and to check for and download updates to the open-source download engine built into the app.
- **Public ad-block filter lists**, downloaded so the app can strip ads from the pages it reads.
- **A free community database of sponsor segments**, so sponsor, self-promo and "like and subscribe" parts can be skipped in videos where the community has marked them. Videos nobody has marked are left as they are. The app sends it only the first few characters of a scrambled (hashed) version of the video's ID, not the ID itself, so the database can't tell exactly which video you saved.
- **A site where you choose to sign in**, only when that site blocks a download. See the next section.

Like any internet request, these services can see your phone's IP address and what was requested. That's between your phone and them, under their own privacy policies. We never get a copy of any of it.

## Sign in only when a site needs it

There are no permanent sign-in buttons. When a download is blocked by a site that needs a session, the app shows a red attention bubble. Tapping it opens a sign-in card about 70% of the screen, centered, with a toolbar, a short explanation and a close button. The card loads the site's own sign-in page.

If you sign in:

- You type your password into **the site's own sign-in page**. The app never sees or stores your password.
- The site gives the app the same login cookies a browser would get. These stay **only on your phone**: in the in-app browser's storage and in an encrypted copy (Android's encrypted storage). App backups are turned off, so they aren't copied into cloud backups.
- The app keeps that session until you sign out. It survives app updates. The site may still expire it on its side.
- The app also keeps a small local record for the **Logged in websites** screen: the site name, when you signed in, and when the session was last used for a download. It never shows media titles, links or thumbnails there. This record is kept in the app's encrypted storage.
- The session is only ever sent back **to that same site**, to fetch the content you asked for. It's never sent to us or to anyone else. Nothing about the cookies themselves is written to logs; the app's on-phone diagnostics only note site names and whether a session was used.
- While a download runs, a temporary cookie file is written to the app's private cache for the download engine and deleted when that download ends.
- The same rules apply to any site that asks for a session, not just YouTube and Reddit.

If you close the card without signing in, the app does not remember that as a failure. The next matching link can ask again.

To sign out, open the overflow menu, tap **Sign out of logged in websites**, pick the site and tap **Sign out**. This deletes everything the app kept for that site: the encrypted copy, its cookies and storage in the in-app browser, its local record and any temporary cookie files. Other sites stay signed in. Uninstalling the app also removes everything.

## Chat apps

Sharing uses Android's normal share feature. The app never signs in to, reads, or touches any chat app's account, messages or contacts. It just hands the file and caption to the app you tap, and you choose who to send it to.

## Permissions, explained simply

- **Accessibility.** This is how the app notices you tapped "Copy link" (or saw a "Link copied" message) in another app, so it can show the bubble. Android lets an accessibility service see on-screen events from all apps; this one only looks for that copy-link moment, then reads the copied link. It doesn't record what you type or read, and nothing it sees leaves your phone. A short "detection log" of why the bubble did or didn't appear (app and site names, never your clipboard text) is kept on your phone so you can troubleshoot it.
- **Display over other apps.** For the floating bubble and the progress rings. The sign-in card and the Share all screen are normal in-app screens, not overlays.
- **Notifications.** To show download progress quietly, and to offer a sign-in action when a download is waiting for one.
- **Unrestricted battery.** So downloads can finish while your screen is off.
- **Install unknown apps.** So the app can install its own updates. Android always asks you to confirm.
- **Internet.** For the connections listed above.

## Children

The app isn't aimed at children and collects no data from anyone, children included.

## Changes

If this policy changes, the new version will be posted here with a new "last updated" date.

## Contact

Questions or worries? Open an issue at <https://github.com/mumayank/av-downloader-releases/issues>.
