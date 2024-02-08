import { Equal, Expect } from '../helpers/type-utils';

export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

type ProgramMode = typeof programModeEnumMap;

type IndividualProgramKey = Exclude<
  keyof ProgramMode,
  'GROUP' | 'ANNOUNCEMENT'
>;

type IndividualProgram = ProgramMode[IndividualProgramKey];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'
    >
  >,
];
