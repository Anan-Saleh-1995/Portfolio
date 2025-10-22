import type { THEME } from '@/lib/utils';

export type Theme = (typeof THEME)[keyof typeof THEME];
