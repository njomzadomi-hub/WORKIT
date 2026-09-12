# WORKIT Launch Readiness

WORKIT is moving from prototype to launch candidate. This checklist defines the minimum release gates before public launch.

## Product promise

WORKIT is a video-first global work platform where people can discover professionals, show real work, find jobs, find workers, hire, book, buy, teach and transact from one professional identity.

## P0 — must be green before public launch

- [x] Video-first Feed with profession-specific actions
- [x] Explore: Discover Work
- [x] Explore: Find Jobs
- [x] Explore: Find Workers
- [x] Profession/skill/location/availability talent search
- [x] Job posting backend
- [x] Job applications backend
- [x] Employer hiring pipeline
- [x] Marketplace listings
- [x] Orders lifecycle
- [x] Verified reviews after completed transactions
- [x] Inbox + 1:1 messaging backend and mobile UI
- [x] User reporting flow
- [x] Admin moderation queue
- [x] Pricing / WORKIT Pro UI
- [x] Seller Earnings UI
- [x] Revenue engine for platform fees / seller payout calculations
- [x] API CI build gate
- [ ] Mobile CI fully green
- [ ] Workit Supabase restored and production schema reconciled
- [ ] Supabase security + performance advisors reviewed after migrations
- [ ] Stripe account dedicated to WORKIT connected
- [ ] Marketplace payment checkout tested end-to-end
- [ ] Seller payouts tested end-to-end
- [ ] Pro + employer subscriptions tested end-to-end
- [ ] Refund / dispute flow tested
- [ ] Account deletion flow verified
- [ ] Privacy Policy final legal copy + public URL
- [ ] Terms of Service final legal copy + public URL
- [ ] Community Guidelines final legal copy + public URL
- [ ] Real-device Android smoke test
- [ ] Real-device iOS smoke test
- [ ] Production crash/error monitoring configured

## P1 — strongly recommended before launch campaign

- [ ] Global profession taxonomy with aliases/synonyms
- [ ] Company profiles + verification
- [ ] Candidate shortlist / saved talent
- [ ] Employer invite-to-apply flow
- [ ] My Applications dashboard
- [ ] My Orders / delivery workspace
- [ ] Appointment calendar for bookable professions
- [ ] Portfolio/project detail pages
- [ ] Profile completion onboarding
- [ ] Push notification preferences
- [ ] Search analytics + no-result tracking
- [ ] Anti-spam / rate limits
- [ ] Content/media moderation automation
- [ ] App Store screenshots and listing copy
- [ ] Google Play screenshots and listing copy
- [ ] Landing page waitlist / download CTA
- [ ] Analytics events for activation, hiring and transactions

## Revenue model foundation

WORKIT monetizes when economic value is created:

- Marketplace transaction fee
- WORKIT Pro subscription
- Employer Growth / Pro plans
- Job, profile and post boosts
- Teaching/course transaction fee
- Donation platform fee
- Future enterprise recruiting products

## Current external blockers

### Supabase
The `Workit` Supabase project is currently inactive. Production database verification and migrations must not be applied until the project is restored and the existing schema is inspected.

### Stripe
The Stripe connection currently available belongs to another project sandbox, not WORKIT. It must not be used for WORKIT payments. Connect a dedicated WORKIT Stripe account/sandbox before implementing live checkout and Connect payouts.

## Release rule

Do not merge the launch branches to `main`, submit to app stores, or enable real payments until all P0 payment, security, data and mobile-build gates are green.
