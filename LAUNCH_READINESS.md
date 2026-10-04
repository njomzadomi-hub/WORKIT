# WORKIT Launch Readiness

Updated 2026-10-04. Public launch remains blocked by the gates below.

## Current checkpoint

- Mobile repository: https://github.com/njomzadomi-hub/workit-mobile
- Branch: `feat/workit-world-bazaar`
- Current code head: `a56d6dd57eb7d9256c07119386bc51f8d42e9639`
- [Mobile CI #243](https://github.com/njomzadomi-hub/workit-mobile/actions/runs/37230943909): running at this update. Previous checkpoint #242 passed.
- [Android QA build #160](https://github.com/njomzadomi-hub/workit-mobile/actions/runs/37230941065): building the new recovery version. Previous build #159 passed and published an APK for ba26da0. Inspect the run and release commit before installing an APK.
- Deployed hiring function: `workit-hiring v7 ACTIVE`. Source validates candidate acceptance before hiring.

The implemented hiring loop is Talent Pool → Invite → Viewed → Apply → Shortlist → Structured Interview Scheduling → Structured Offer → Candidate Accept/Decline → Hired → Verified Work. Complete real-device integration QA is still required.

## Verified development checks

- Mobile TypeScript check and Android/iOS/web Expo exports pass.
- Expo Doctor passes all 21 checks after upgrading React Native to 0.86.3 and aligning dependencies with Expo SDK 57.
- Video playback uses expo-video; the unmaintained expo-av package is removed. Mocked-player checks cover mute/loop, focus and background pausing, manual controls and error fallback.
- Icon, adaptive foreground, notification icon and splash are configured; native Android project generation passes.
- Build dependencies have a lockfile and CI installs with npm ci.
- Password reset request/form and cold/warm link handling are implemented; auth source tests pass with mocks. Allowlist/SMTP and real-device recovery remain unverified.
- Production configuration preflight and explicit EAS environments are implemented.
- EAS project ID validation is implemented. A real WORKIT EAS project ID and platform credentials still need to be linked.
- Browser preview renders Login, Discover, Interview, Offer, Recovery and Reset using actual mobile components with sample services. Invalid calendar dates are rejected and a valid interview time displays correctly.

## See the interface

[Open current app-screen preview](https://njomzadomi-hub.github.io/WORKIT/current-app-preview.html)

![Current discovery screen with sample data](current-app-preview.jpg)

This visual preview sends no login credentials, applications, messages or offers. It does not verify native performance or production service delivery. Store screenshots must be captured from final device builds.

## P0 — required before public launch

- [ ] Latest-head native APK and signed production builds pass.
- [ ] Real Android and iPhone QA: signup, login, logout, session restore, account recovery, media and long feed sessions.
- [ ] Employer/candidate integration QA: invite → apply → shortlist → interview proposal/response → offer accept/decline → hired → verified work.
- [ ] Push delivery and tap routing verified with WORKIT EAS project ID and Android/iOS credentials.
- [ ] Production backend schema, RLS, ownership checks, storage policies and abuse limits reviewed. Project health reports ACTIVE_HEALTHY, but the latest security-advisor requests returned hibernation errors and database inspection timed out; a clean audit is unverified.
- [ ] Dedicated WORKIT payment infrastructure; webhook-confirmed checkout, seller settlement, subscriptions, refunds and disputes tested before enabling payments.
- [ ] Reporting/blocking/moderation and account deletion verified end to end.
- [ ] Final Privacy Policy, Terms, Community Guidelines, support and deletion URLs published and approved.
- [ ] Production crash/error monitoring and notification preferences verified.
- [ ] Store screenshots, metadata, privacy disclosures, age rating, signing and developer accounts complete.
- [ ] Production build and App Store/Google Play submission reviewed.

## Release evidence

Keep device, service and store evidence tied to the tested commit. Source implementation, compilation and browser preview alone do not close the P0 gates. Earlier implementation checklist entries are not current integration-test evidence.
