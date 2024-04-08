<a href="https://totaltypescript.com/tutorials/react-with-typescript"><img src="https://res.cloudinary.com/total-typescript/image/upload/v1683647787/react-with-typescript_p2dgf5.png" alt="React with TypeScript, tutorial by Matt Pocock" /></a>

## Quickstart

Clone this repo or [open in Gitpod](https://gitpod.io/#https://github.com/total-typescript/react-typescript-tutorial).

```sh
# Installs all dependencies
npm install

# Starts the first exercise
npm run exercise 01

# Runs linting and tests on the solution
npm run solution 01
```

## How to take the course

You'll notice that the course is split into exercises. Each exercise is split into a `*.problem.ts` and a `*.solution.ts`.

To take an exercise:

1. Go into `*.problem.ts`
2. Run `npm run exercise 01`, where `01` is the number of the exercise you're on.

The `exercise` script will run TypeScript typechecks and a test suite on the exercise.

This course encourages **active, exploratory learning**. In the video, I'll explain a problem, and **you'll be asked to try to find a solution**. To attempt a solution, you'll need to:

1. Check out [TypeScript's docs](https://www.typescriptlang.org/docs/handbook/intro.html) or the [React TypeScript cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
1. Try to find something that looks relevant.
1. Give it a go to see if it solves the problem.

You'll know if you've succeeded because the tests will pass.

**If you succeed**, or **if you get stuck**, unpause the video and check out the `*.solution.ts`. You can see if your solution is better or worse than mine!

You can run `npm run solution 01` to run the tests and typechecking on the solution.

## Acknowledgements

Say thanks to Matt on [Twitter](https://twitter.com/mattpocockuk) or by joining his [Discord](https://discord.gg/8S5ujhfTB3). Consider signing up to his [Total TypeScript course](https://totaltypescript.com).

## Reference

### `npm run exercise 01`

Alias: `npm run e 01`

Run the corresponding `*.problem.ts` file.

### `npm run solution 01`

Alias: `npm run s 01`

Run the corresponding `*.solution.ts` file. If there are multiple, it runs only the first one.
