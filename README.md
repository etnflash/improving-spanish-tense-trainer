<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1HWiz6SuUZsaX7H6m80vwtXnnggyiH0rP

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Notable Features

- Adaptive tense scheduling remembers your recent misses and surfaces those tenses more frequently for extra practice.
- Progress is stored in the browser via localStorage, so tense weighting picks up where you left off until storage is cleared.
- Motivation panel surfaces the lowest-accuracy tenses (“Momentum Pulse”) so you always know which challenge to tackle next.
- Answering questions grants XP that levels up your learner badge, rewarding streaks with bonus points.
- Focus cards highlight the last few attempts (not lifetime averages) and trigger celebratory callouts when you hit perfect mini-streaks.
