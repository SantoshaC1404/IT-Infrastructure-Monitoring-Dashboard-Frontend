import test from 'node:test';
import assert from 'node:assert/strict';

import { toCriticalDevices, toHistory } from './monitoringMapper.js';

test('toCriticalDevices normalizes payloads from the API', () => {
  const payload = {
    critical_devices: [
      {
        id: 1,
        name: 'router-01',
        ip_address: '10.0.0.2',
        status: 'critical',
        cpu_usage: '92',
        memory_usage: '88',
        disk_usage: '95',
        critical_reason: 'High CPU',
      },
    ],
  };

  assert.deepEqual(toCriticalDevices(payload), [
    {
      id: 1,
      name: 'router-01',
      ip_address: '10.0.0.2',
      status: 'critical',
      cpu_usage: 92,
      memory_usage: 88,
      disk_usage: 95,
      critical_reason: 'High CPU',
    },
  ]);
});

test('toHistory handles empty or nested history payloads', () => {
  assert.deepEqual(toHistory([]), []);

  assert.deepEqual(
    toHistory({ history: [{ time: '2024-01-01T00:00:00Z', cpu: '40', memory: '60', disk: '70' }] }),
    [
      {
        time: '2024-01-01T00:00:00Z',
        cpu: 40,
        memory: 60,
        disk: 70,
      },
    ],
  );
});
