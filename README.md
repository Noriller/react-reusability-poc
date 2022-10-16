# React Reusability POC

This is a proof of concept of how you can write React code once and render it in both Web and Native apps.

## How to use

```bash
yarn install
yarn --global add expo-cli

yarn start # for react native
# yarn tunnel # if the normal way don't work or your phone is in another network
yarn dev # for react web
```

## The humble object

Usually used for testing, you split the logic from the GUI and make the GUI humble.

This separations makes it easier to test the logic since you don't need to worry about the GUI and how to call the functions through it.

This also makes it easier to render the same logic in different components, even if those components will be rendered by different engines.

## The POC

With that in mind, I used a basic `create-expo-app` and a `create-react-app` and "merged" them.

I made a `Counter` component split into the "logic", and then the "web" and "native" components.

Since React for web and for native has different needs and components to be able to render, each has it's own implementation. But the logic behind them is exactly the same and could be reused without problems.

For this example I wanted to have all components and logic next to each other, and while I do think that having everything next to each other improves the experience for writing everything, I know that it would take a lot of configuring stuff (transpiler, test, lint, etc).

Then again I used the most basic options just because I wanted to see if with minimal configuration I would be able to do this.

### Making this better

For React Native, we pretty much "only" have `expo` as an alternative. For the Web part however... `cra`, `vite`, `next`, `remix`, `redwood`...

The idea I believe would be most stable and meta-framework agnostic to work and to deploy would be to make this into a `monorepo`.

We could neatly split the dependencies and config and then split the logic hooks from the web/native parts.
