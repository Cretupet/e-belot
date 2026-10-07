# E_BELOT

Modern mobile-first 2×2 Moldovan Belot PWA.

## Status

- Game engine: implemented
- 32-card deck and 5 + face-up + 3 dealing: implemented
- Two bidding rounds + forced dealer trump: implemented
- Strict follow-suit / trump / overtrump rules: implemented
- Bil scoring, bolts, kaput and 101 → +50 target: implemented
- Declarations, Bella, 4×7 and 4×8: implemented
- Local 1-player test mode with three bots: implemented
- RU/RO translation foundation: implemented
- PWA manifest: implemented
- Supabase realtime room backend: prepared
- CI: tests + production build

## Run locally

```bash
npm install
npm run dev
```

## Online setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy `.env.example` to `.env.local` and fill the public URL and anon key.
4. Restart the app.

## Rules

The project follows the Moldovan E_BELOT rules defined for this game: 32 cards; teams on opposite seats; dealer rotates; 101 bil target with +50 when both teams cross the target; three bolts cost 10 bil; kaput is 252 base points and gives the losing team -10 bil; dealer-side kaput also adds a bolt; 4×7 cancels the deal, 4×8 cancels ordinary declarations but not Bella; Bella is trump Q+K for 20.

<!-- deployment trigger -->
