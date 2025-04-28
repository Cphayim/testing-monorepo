// vitest.config.integration.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/tests/**/*.test.ts'],
    setupFiles: ['src/tests/helpers/setup.ts'],
    // 集成测试中需要与数据库交互，并需要特定的数据集
    // 如果多个测试同时运行并与数据库交互，多线程会由于意外数据而导致测试失败
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true
      }
    }
  },
  resolve: {
    alias: {
      auth: '/src/auth',
      quotes: '/src/quotes',
      lib: '/src/lib'
    }
  }
})
