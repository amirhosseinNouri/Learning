import { it } from 'vitest';

interface Events {
  click: {
    x: number;
    y: number;
  };
  focus: undefined;
}

export const sendEvent = <TEvent extends keyof Events>(
  event: TEvent,
  ...args: TEvent extends 'click' ? [any, ...any[]] : any[]
) => {
  // Send the event somewhere!
};

it('Should force you to pass a second argument when you choose an event with a payload', () => {
  // @ts-expect-error
  sendEvent('click');

  sendEvent('click', {
    x: 'oh dear',
  });

  sendEvent('click', {
    y: 1,
  });

  sendEvent('click', {
    x: 1,
    y: 2,
  });
});

it('Should prevent you from passing a second argument when you choose an event without a payload', () => {
  sendEvent('focus');

  sendEvent('focus', {});
});
