# AV Downloader releases

Public APKs for the personal sideload app. **No application source lives in this repository.**

The app checks this URL with no token:

```
https://api.github.com/repos/mumayank/av-downloader-releases/releases/latest
```

## Asset name

Publish the signed arm64-v8a APK as:

```
av-downloader-vX.Y.Z.apk
```

Examples the app also accepts:

```
av-downloader-v1.2.3.apk
av-downloader-v1.2.3+4.apk
av-downloader-v1.2.3-arm64-v8a.apk
av-downloader-v1.2.3+4-arm64-v8a.apk
```

`X.Y.Z` is `versionName`. The optional `+N` is `versionCode`. An ABI suffix is `arm64-v8a`, `armeabi-v7a`, `x86_64`, or `universal`. The phone prefers `arm64-v8a`, then a file with no ABI suffix.

Release notes must include a line the app can read when the version name did not change but the version code did:

```
versionCode: 4
```

The installed app updates when the remote version name is newer, or when the names match and this version code is greater.

## How an APK gets here

1. **Private CI (usual path).** Tag `vX.Y.Z` in `mumayank/av-downloader`. The workflow there builds the release APK and, when `RELEASES_REPO_TOKEN` and the keystore secrets are set, uploads `av-downloader-vX.Y.Z.apk` to a release on this repo.
2. **Manual workflow in this repo.** Actions → **Publish signed APK** → supply the tag, the versionCode, and an HTTPS URL of a signed APK that GitHub-hosted runners can download. The workflow creates the release and attaches the file. It does not build or sign anything.

Do not commit APKs or source to the default branch.
