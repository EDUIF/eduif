import Vue from 'vue';
import { EduifComponentSize, EduifComponent } from './component';

export type ComponentSize = EduifComponentSize
export type Component = EduifComponent

export interface InstallOptions {
  size: EduifComponentSize;
  zIndex: number;
}

export const version: string;

export function install(vue: typeof Vue, options: InstallOptions): void;
