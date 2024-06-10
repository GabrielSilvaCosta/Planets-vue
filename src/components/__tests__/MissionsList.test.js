
import { describe, expect, it } from "vitest";
import Missions from '../../data/Missions';

describe('Missions data', () => {
    it('should have an array of missions', () => {
      expect(Array.isArray(Missions)).toBe(true);
    });

    it('should have 20 missions', () => {
      expect(Missions.length).toBe(20);
    });
  });


