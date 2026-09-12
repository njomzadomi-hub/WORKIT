# WORKIT Launch Readiness

WORKIT is now a launch candidate, not a prototype. This checklist defines the remaining gates before public release.

## Product promise

WORKIT is a video-first global work platform where people can discover professionals, show real work, find jobs, find workers, hire, book, buy, teach and transact from one professional identity.

## GREEN — completed

- [x] Video-first Feed with profession-specific actions
- [x] Explore: Discover Work / Find Jobs / Find Workers
- [x] Profession/skill/location/availability talent search
- [x] Job posting backend + job detail flow
- [x] Job applications + employer hiring pipeline
- [x] Marketplace listings for services/products/teaching
- [x] Feed posts linked to market listings
- [x] Orders lifecycle + transition graph
- [x] Verified reviews after completed transactions
- [x] Inbox + 1:1 messaging
- [x] User reporting + admin moderation queue
- [x] Pricing / WORKIT Pro / seller Earnings surfaces
- [x] Revenue engine for fees and seller payout calculations
- [x] Supabase WORKIT restored and online
- [x] Commerce/revenue/moderation schema applied live
- [x] Application pipeline schema reconciled
- [x] RLS/security hardening applied
- [x] Trigger functions hardened
- [x] Collision-safe profile username creation
- [x] Foreign-key/search indexes added
- [x] Modern Supabase publishable key available
- [x] Supabase security advisor rerun after migration
- [x] Supabase performance advisor rerun after migration
- [x] API CI green
- [x] Mobile TypeScript check green
- [x] Android Expo bundle export green
- [x] iOS Expo bundle export green
- [x] Feed CTA routes to Job / Market / Professional flows
- [x] Post Job creates a real job + feed post
- [x] Service/Product/Teach creates market listing + feed post
- [x] Store listing / ASO draft prepared

## P0 — required before public launch

- [ ] Connect a dedicated WORKIT Stripe account / payment infrastructure
- [ ] Implement real checkout with webhook-confirmed payment state
- [ ] Implement seller payouts / marketplace settlement
- [ ] Test refunds/disputes end-to-end
- [ ] Test Pro + employer subscriptions end-to-end
- [ ] Confirm App Store / Google Play policy treatment for marketplace transactions and subscriptions
- [ ] Configure production EXPO_PUBLIC_SUPABASE_URL
- [ ] Configure production EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY
- [ ] Configure production EXPO_PUBLIC_API_URL
- [ ] Deploy latest API launch branch to production
- [ ] Enable Supabase leaked-password protection
- [ ] End-to-end test: signup → profile → post → discover → message → apply/order
- [ ] Employer end-to-end: post job → applications → shortlist → interview → offer → hired
- [ ] Marketplace end-to-end: listing → order → accepted → in progress → delivered → completed → review
- [ ] Real Android device smoke test
- [ ] Real iPhone smoke test
- [ ] Account deletion flow verified
- [ ] Final Privacy Policy public URL
- [ ] Final Terms of Service public URL
- [ ] Final Community Guidelines public URL
- [ ] Final Support/Contact public URL
- [ ] Production crash/error monitoring configured
- [ ] Final app icon, splash and store screenshots

## P1 — strongly recommended for launch week

- [ ] Global profession taxonomy v1 with aliases/synonyms
- [ ] Company profiles + verification
- [ ] Candidate shortlist / saved talent
- [ ] Employer invite-to-apply flow
- [ ] My Applications dashboard polish
- [ ] My Orders / delivery workspace polish
- [ ] Appointment calendar for bookable professions
- [ ] Portfolio/project detail pages
- [ ] Profile completion onboarding
- [ ] Push notification preferences + QA
- [ ] Search analytics + no-result tracking
- [ ] Anti-spam / rate limits
- [ ] Content/media moderation automation
- [ ] Analytics events for activation, hiring and transactions
- [ ] Seed high-quality launch content across major profession categories

## Revenue model foundation

WORKIT monetizes when economic value is created:

- Marketplace transaction fee
- WORKIT Pro subscription
- Employer Growth / Pro plans
- Job, profile and post boosts
- Teaching/course transaction fee
- Donation platform fee
- Future enterprise recruiting products

## Current external blocker

### Stripe
The currently connected Stripe account belongs to another project sandbox, not WORKIT. It must not be used for WORKIT payments. Connect a dedicated WORKIT Stripe account/sandbox before enabling real checkout, subscriptions or payouts.

## Release rule

Do not merge the launch branches to `main`, submit to app stores or enable real payments until the payment, production-config, legal and real-device P0 gates are green or explicitly waived after review.
